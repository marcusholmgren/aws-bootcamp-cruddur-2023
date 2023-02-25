import './MessageForm.css';
import React from 'react';
import { useParams } from 'react-router-dom';

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};
export default function ActivityForm(props: Props) {
  const [count, setCount] = React.useState(0);
  const [message, setMessage] = React.useState('');
  const params = useParams();

  const classes = [];
  classes.push('count');
  if (1024 - count < 0) {
    classes.push('err');
  }

  const onsubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    try {
      const backend_url = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/messages`;
      console.log('onsubmit payload', message);
      const res = await fetch(backend_url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message,
          user_receiver_handle: params.handle,
        }),
      });
      let data = await res.json();
      if (res.status === 200) {
        props.setMessages((current) => [...current, data]);
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

  return (
    <form className='message_form' onSubmit={onsubmit}>
      <textarea
        type='text'
        placeholder='send a direct message...'
        value={message}
        onChange={textarea_onchange}
      />
      <div className='submit'>
        <div className={classes.join(' ')}>{1024 - count}</div>
        <button type='submit'>Message</button>
      </div>
    </form>
  );
}
