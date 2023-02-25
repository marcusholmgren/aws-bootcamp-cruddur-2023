import './SuggestedUserSection.css';
import SuggestedUserItem from '../components/SuggestedUserItem';
import React from 'react';

type Props = {
  users: Array<User>;
};
export default function SuggestedUsersSection(props: Props) {
  return (
    <div className='suggested_users'>
      <div className='suggested_users_title'>Suggested Users</div>
      {props.users.map((user) => {
        return (
          <SuggestedUserItem
            key={user.handle}
            display_name={user.display_name}
            handle={user.handle}
          />
        );
      })}
    </div>
  );
}
