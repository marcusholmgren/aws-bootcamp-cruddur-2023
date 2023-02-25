import './ActivityFeed.css';
import ActivityItem from './ActivityItem';
import React from 'react';

type Props = {
  title: string;
  activities: Array<Activity>;
  setReplyActivity: (activity: Activity) => void;
  setPopped: (popped: boolean) => void;
};
export default function ActivityFeed(props: Props) {
  return (
    <div className='activity_feed'>
      <div className='activity_feed_heading'>
        <div className='title'>{props.title}</div>
      </div>
      <div className='activity_feed_collection'>
        {props.activities.map((activity) => {
          return (
            <ActivityItem
              setReplyActivity={props.setReplyActivity}
              setPopped={props.setPopped}
              key={activity.uuid}
              activity={activity}
            />
          );
        })}
      </div>
    </div>
  );
}
