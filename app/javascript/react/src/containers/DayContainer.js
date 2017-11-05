import React, { Component } from 'react';
import ActivityForm from "../components/ActivityForm";
import DaysIndex from "../components/DaysIndex"


class DayContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      days: []
    }
    this.fetchDays = this.fetchDays.bind(this)
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
