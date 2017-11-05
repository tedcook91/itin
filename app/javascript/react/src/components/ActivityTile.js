import React from 'react';

const ActivityTile = props => {
  let textArray = [props.activityType, props.body]

  return(
    <li>{textArray}</li>
  )
}

export default ActivityTile;
