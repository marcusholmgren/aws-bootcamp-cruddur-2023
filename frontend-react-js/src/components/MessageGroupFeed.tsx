import './MessageGroupFeed.css';
import MessageGroupItem from './MessageGroupItem';
import React from 'react';

type Props = {
  message_groups: Array<{
    uuid: string;
  }>;
};
export default function MessageGroupFeed(props: Props) {
  return (
    <div className='message_group_feed'>
      <div className='message_group_feed_heading'>
        <div className='title'>Messages</div>
      </div>
      <div className='message_group_feed_collection'>
        {props.message_groups.map((message_group) => {
          return <MessageGroupItem key={message_group.uuid} message_group={message_group} />;
        })}
      </div>
    </div>
  );
}
