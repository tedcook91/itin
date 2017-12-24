import React from 'react';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import ActivityForm from '../components/ActivityForm';

const DayTile = props => {
  return (

    <div className="day-card">
      <ActivitiesContainer
      activities={props.activities}
      />
      <ActivityForm
        addActivity={props.addActivity}
        itineraryId={props.itineraryId}
        activities={props.activities}
        dayId={props.day_id}
      />
    </div>

  )
}


export default DayTile;
