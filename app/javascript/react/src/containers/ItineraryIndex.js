import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ItineraryForm from '../components/ItineraryForm';
import ItineraryTile from '../components/ItineraryTile';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      itineraries: []
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchItins = this.fetchItins.bind(this)
    this.addItin = this.addItin.bind(this)
  }

  componentDidMount() {
    this.fetchUser()
    this.fetchItins()
  }

  addItin(formPayload) {
    fetch(`/api/v1/users/${this.state.userId}/itineraries`, {
      credentials: "same-origin",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formPayload)
    }).then(() => {
      this.fetchItins()
    })
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

  fetchItins() {
    fetch(`/api/v1/users/${this.state.userId}/itineraries`, {
      credentials: "same-origin"
    }).then(res => res.json())
      .then(data => {
        this.setState({
          itineraries: data
        })
      })
  }


  render() {
    let addItin = (formPayload) => this.addItin(formPayload)
    let itineraries = this.state.itineraries.map(itinerary =>
      <a href={`/users/${this.state.userId}/itineraries/${itinerary.id}`}>
        <ItineraryTile
        id={itinerary.id}
        key={itinerary.id}
        name={itinerary.name}
        notes={itinerary.notes}
        />
      </a>
    )
    return(
      <div>
        <div id="itin-header">
          <h2>Your Itineraries</h2>
        </div>
        {itineraries}
        <div id="itin-form">
        <ItineraryForm addItin={addItin} />
      </div>
      </div>
    )
  }
}

export default ItineraryIndex
