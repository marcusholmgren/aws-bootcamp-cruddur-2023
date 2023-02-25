import './ReplyForm.css';
import React from 'react';
import { ReactComponent as BombIcon } from './svg/bomb.svg';

import ActivityContent from '../components/ActivityContent';

type Props = {
  activity: Activity;
  activities: Activity[];
  setActivities: React.Dispatch<React.SetStateAction<Activity[]>>;
  popped: boolean;
  setPopped: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ReplyForm(props: Props) {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('');

  const classes = [];
  classes.push('count');
  if (240 - count < 0) {
    classes.push('err');
  }

  const onsubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const backend_url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/activities/${
        props.activity.uuid
      }/reply`;
      const res = await fetch(backend_url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
        }),
      });
      let data = await res.json();
      if (res.status === 200) {
        // add activity to the feed

        let activities_deep_copy = JSON.parse(JSON.stringify(props.activities));
        let found_activity = activities_deep_copy.find(function (element: Activity) {
          return element.uuid === props.activity.uuid;
        });
        found_activity.replies.push(data);

        props.setActivities(activities_deep_copy);
        // reset and close the form
        setCount(0);
        setMessage('');
        props.setPopped(false);
      } else {
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const textarea_onchange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCount(event.target.value.length);
    setMessage(event.target.value);
  };

  let content;
  if (props.activity) {
    content = <ActivityContent activity={props.activity} />;
  }

  if (props.popped === true) {
    return (
      <div className='popup_form_wrap'>
        <div className='popup_form'>
          <div className='popup_heading'></div>
          <div className='popup_content'>
            <div className='activity_wrap'>{content}</div>
            <form className='replies_form' onSubmit={onsubmit}>
              <textarea
                placeholder='what is your reply?'
                value={message}
                onChange={textarea_onchange}
              />
              <div className='submit'>
                <div className={classes.join(' ')}>{240 - count}</div>
                <button type='submit'>Reply</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
