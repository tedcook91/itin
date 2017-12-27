import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location, parseInt(props.day_id)]
  return(
      <div className="day-card">
        <h4> Day: {props.day}</h4>
        <hr></hr>
        <h5>Activity Type: {props.event}</h5>
        <hr></hr>
        <h5>Location: {props.location}</h5>
        <hr></hr>
        <p>Description: {props.body}</p>
      </div>
  )
}

export default ActivityTile;
