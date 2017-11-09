import React from 'react';
import ActivityForm from './ActivityForm'

const ActivityTile = props => {
  let textArray = [props.event, props.body, props.location]
  let addActivity = (formPayload) => props.addActivity(formPayload)
  return(
    <div className="medium-3 columns">
      <div className="row">
        <div className="activity-card">
            <h5>{props.event}</h5>
            <hr></hr>
            <h5>{props.location}</h5>
            <hr></hr>
            <p>{props.body}</p>
            <hr></hr>
          <ActivityForm
            itineraryId={props.itineraryId}
            addActivity={props.addActivity}/>
        </div>
      </div>
    </div>
  )
}

export default ActivityTile;
