import React, { Component } from 'react';
import ActivityForm from "../components/ActivityForm";
import DaysIndex from "../components/DaysIndex"


class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      itineraryId: props.match.params.itinerary_id,
      activities: []
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchActivities = this.fetchActivities.bind(this)
  }

  componentDidMount() {
    this.fetchDays()
  }

  fetchUser() {
    fetch(`/api/v1/users/${this.state.userId}`, {
      credentials: "same-origin"
    }).then(res => res.json())
    .then(data => {
      this.setState({
        user:data
      })
    })
  }

  fetchActivities() {
    fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itinerary_id}`, {
      credentials: "same-origin"
    }).then(res => res.json())
    .then(data => {
      this.setState({
        itinerary: data
      })
    })
  }

  render() {
    return(
      <div>
        <h1>Days of Trip</h1>
        <hr />
        <ActivityTile
        />
        <hr />
        <ActivityForm
          // addNewDay={addNewDay}
        />
      </div>
    )
  }
}

export default DayContainer
