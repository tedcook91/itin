import React from 'react';

const ItineraryTile = props => {
  let textArray = [props.notes, props.name]

  return(
    <li>{textArray}</li>
  )
}

export default ItineraryTile;
