import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]
  return(
        <div>
            <h5>Activity Type: {props.event}</h5>
            <hr></hr>
            <h5>Location: {props.location}</h5>
            <hr></hr>
            <p>Description: {props.body}</p>
            <hr></hr>
        </div>
  )
}

export default ActivityTile;
