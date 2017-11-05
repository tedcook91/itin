import React from 'react';

const DaysIndex = props => {

  let days = props.days.map(day => {
    return(
      <ActivityTile
        key={day.id}
        activityType={day.activityType}
        body={day.body}
      />
    )
  })
  return(
    <ul>
      {days}
    </ul>
  )
}

export default DaysIndex;
