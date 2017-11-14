import React from 'react';
import ActivityTile from '../components/ActivityTile';

const ActivitiesContainer = props => {
  let activities = props.activities.map(activity => {
    return(
      <ActivityTile
        id={activity.id}
        key={activity.id}
        event={activity.event}
        location={activity.location}
        body={activity.body}
        addActivity={this.addActivity}
      />
    )
  })
  return(
    <ul>
      {activities}
    </ul>
  )

}



export default ActivitiesContainer;
