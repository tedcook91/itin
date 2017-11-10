import React from 'react';
import DayTile from '../components/DayTile';

const DaysContainer = props => {
  // console.log(props)
  let days = props.days.map(day => {
    return(
      <DayTile
        id={days.id}
        itineraryId={props.itineraryId}
        date={days.date}
      />
    )
    return(
      {days}
    )
  })
}

export default DaysContainer;
