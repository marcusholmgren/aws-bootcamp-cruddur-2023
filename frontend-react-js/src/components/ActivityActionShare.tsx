import { ReactComponent as ShareIcon } from './svg/share.svg';
import React from 'react';

type Props = {
  activity_uuid: string;
};
export default function ActivityActionRepost(props: Props) {
  const onclick = (event: React.UIEvent<HTMLElement>) => {
    console.log('trigger share');
  };

  return (
    <div onClick={onclick} className='action activity_action_share'>
      <ShareIcon className='icon' />
    </div>
  );
}
