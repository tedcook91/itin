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
      />
    </div>

  )
}


export default DayTile;
