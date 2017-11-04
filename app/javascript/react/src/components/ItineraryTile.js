import React from 'react';

const ItineraryTile = props => {


  return(
      <div className="small-4 columns">
        <div className="row">
        <div className="card">
          <div className="card-divider">
            <h4>{props.name}</h4>
          </div>
          <div className="card-section">
            <p>{props.notes}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ItineraryTile;
