import './CrudButton.css';
import React from 'react';

type Props = {
  setPopped: (popped: boolean) => void;
};
export default function CrudButton(props: Props) {
  const pop_activities_form = (event: React.UIEvent<HTMLButtonElement>) => {
    props.setPopped(true);
  };

  return (
    <button onClick={pop_activities_form} className='post' href='#'>
      Crud
    </button>
  );
}
