import React from 'react';

const DayTile = props => {
  let textArray = [props.activityType, props.body]

  return(
    <li>{textArray}</li>
  )
}

export default DayTile;
