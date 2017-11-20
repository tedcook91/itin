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
      <div className="medium-4 columns">
        <div className="day-tile">
          {days}
            <div>
            <ActivityForm
              itineraryId={day.itineraryId}
              addActivity={day.addActivity}
            />
          </div>
        </div>
      </div>
    )
  })
  return days;
}

export default DaysContainer;
