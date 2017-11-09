import React from 'react';

const ItineraryTile = props => {


  return(
        <div className="medium-3 columns">
          <div className="row">
          <div className="itin-card">
            <div>
              <h4>{props.name}</h4>
            </div>
            <div>
              <p>{props.notes}</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ItineraryTile;
