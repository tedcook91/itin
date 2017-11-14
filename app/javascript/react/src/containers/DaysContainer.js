import React from 'react';
import DayTile from '../components/DayTile';

const DaysContainer = props => {

  let days = props.days.map(day => {

    return(
      <DayTile
        itineraryId={day.itineraryId}
        date={day.date}
        activities={day[1]}
      />
    )
    return(
      <div className="day-tile">
        {days}
        <ActivityForm
          itineraryId={day.itineraryId}
          addActivity={day.addActivity}
        />
      </div>
    )
  })
  return days;
}

export default DaysContainer;
