import React, { Component } from 'react';
import ActivityTile from "../components/ActivityTile";
import ActivityForm from "../components/ActivityForm";


class ItineraryShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      itineraryId: this.props.match.params.itinerary_id,
      activities: []
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchActivities = this.fetchActivities.bind(this)
    this.addActivity = this.addActivity.bind(this)
  }
  componentDidMount() {
    this.fetchUser()
    this.fetchActivities()
  }

  fetchUser() {
    fetch(`/api/v1/users/${this.state.userId}`, {
      credentials: "same-origin"
    }).then(res => res.json())
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  fetchActivities() {
    fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itineraryId}`, {
      credentials: "same-origin"
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        activities: data.activities
      })
    })
  }

  addActivity(formPayload) {
    console.log(formPayload)
    fetch(`/api/v1/activities`, {    
  // fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itineraryId}`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPayload)
    }).then(() => {
      this.fetchActivities()
    })
  }



  render() {
    let addActivity = (formPayload) => this.addActivity(formPayload)
    let activities = this.state.activities.map(activity =>
      <ActivityTile
        id={activity.id}
        key={activity.id}
        event={activity.event}
        location={activity.location}
        body={activity.body}
      />
    )

    return(
      <div>
        <div>
        This is the Itin Show Page
        </div>
      {activities}
      <ActivityForm
        itineraryId={this.state.itineraryId}
        addActivity={addActivity}/>
      </div>
    )
  }
}

export default ItineraryShowPage
