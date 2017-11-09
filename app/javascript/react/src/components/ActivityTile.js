import React from 'react';
import ActivityForm from './ActivityForm'

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]
  let addActivity = (formPayload) => this.addActivity(formPayload)
  return(
    <div className="medium-3 columns">
      <div className="row">
        <div className="activity-card">
          <div>
            <h3>{props.event}</h3>
            <h3>{props.location}</h3>
            <p>{props.body}</p>
          </div>
          <ActivityForm />
        </div>
      </div>
    </div>
  )
}

export default ActivityTile;
