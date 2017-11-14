import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]
  return(
        <div>
            <h5>{props.event}</h5>
            <hr></hr>
            <h5>{props.location}</h5>
            <hr></hr>
            <p>{props.body}</p>
        </div>
  )
}

export default ActivityTile;
