import { ReactComponent as ReplyIcon } from './svg/reply.svg';
import React from 'react';

type Props = {
  activity: Activity;
  count: number;
  activity_uuid: string;
  setReplyActivity: (activity: Activity) => void;
  setPopped: (popped: boolean) => void;
};
export default function ActivityActionReply(props: Props) {
  const onclick = (event: React.UIEvent<HTMLElement>) => {
    props.setReplyActivity(props.activity);
    props.setPopped(true);
  };

  let counter;
  if (props.count > 0) {
    counter = <div className='counter'>{props.count}</div>;
  }

  return (
    <div onClick={onclick} className='action activity_action_reply'>
      <ReplyIcon className='icon' />
      {counter}
    </div>
  );
}
