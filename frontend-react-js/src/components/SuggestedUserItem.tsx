import './SuggestedUserItem.css';
import React from 'react';

type Props = User;
export default function SugestedUserItem(props: Props) {
  return (
    <div className='user'>
      <div className='avatar'></div>
      <div className='identity'>
        <span className='display_name'>{props.display_name}</span>
        <span className='handle'>@{props.handle}</span>
      </div>
    </div>
  );
}
