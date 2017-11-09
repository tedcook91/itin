import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]
  let addActivity = (formPayload) => props.addActivity(formPayload)
  return(
    <div className="medium-4 columns">
      <div className="row">
        <div>
            <h5>{props.event}</h5>
            <hr></hr>
            <h5>{props.location}</h5>
            <hr></hr>
            <p>{props.body}</p>
        </div>
      </div>
    </div>
  )
}

export default ActivityTile;
