import React from 'react';
import DayTile from '../components/DayTile';

const DaysContainer = props => {
  let days = props.days.map(day => {

    return(
      <DayTile
        itineraryId={day.itineraryId}
        date={day.date}
        dayId={day.id}
        activities={day[1]}
        addActivity={props.addActivity}
      />
    )
    return(
      <div className="medium-4 columns">
        <div className="day-tile">
          {days}
        </div>
      </div>
    )
  })
  return days;

}

export default DaysContainer;
