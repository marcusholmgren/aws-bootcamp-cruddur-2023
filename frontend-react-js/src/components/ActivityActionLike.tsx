import { ReactComponent as HeartIcon } from './svg/heart.svg';
import React from 'react';

type Props = {
  count: number;
  activity_uuid: string;
};
export default function ActivityActionLike(props: Props) {
  const onclick = (event: React.UIEvent<HTMLElement>) => {
    console.log('toggle like/unlike');
  };

  let counter;
  if (props.count > 0) {
    counter = <div className='counter'>{props.count}</div>;
  }

  return (
    <div onClick={onclick} className='action activity_action_heart'>
      <HeartIcon className='icon' />
      {counter}
    </div>
  );
}
