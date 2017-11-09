import React from 'react';
import ActivitiesContainer from '../containers/ActivitiesContainer';
import ActivityForm from '../components/ActivityForm';

const DayTile = props => {
  return (
    <div className="day-card">
      <div>
        <ActivitiesContainer />
      </div>
      <div>
        <ActivityForm
          itineraryId={props.itineraryId}
          addActivity={props.addActivity}
        />
      </div>
    </div>
  )
}


export default DayTile;
