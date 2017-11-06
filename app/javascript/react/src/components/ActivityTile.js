import React from 'react';

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]

  return(
    <div className="medium-4 columns">
      <div className="row">
        <div className="activity-card">
          <div className="activity-header">
            <h3>{props.event}{props.location}</h3>
          </div>
          <div className="activity-body">
            <p>{props.body}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityTile;
