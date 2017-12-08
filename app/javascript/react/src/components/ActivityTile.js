import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location, parseInt(props.day_id)]
  return(
        <div>
            <h5>Activity Type: {props.event}</h5>
            <hr></hr>
            <h5>Location: {props.location}</h5>
            <hr></hr>
            <p>Description: {props.body}</p>
            <hr></hr>
            <p> Day ID {props.dayId}</p>
        </div>
  )
}

export default ActivityTile;
