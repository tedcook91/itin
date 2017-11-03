import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import ItineraryForm from '../components/ItineraryForm';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.id,
      itineraries: {}
    }
    this.fetchUser = this.fetchUser.bind(this)
    this.fetchItins = this.fetchItins.bind(this)
    this.addItin = this.addItin.bind(this)
  }

  componentDidMount() {
    this.addItin()
    this.fetchUser()
    this.fetchItins()
  }

  addItin(formPayload) {
    // May need to end this with .json
    fetch(`/api/v1/users/${this.state.userId}/itineraries/${this.state.itinId}`, {
      credentials: "same-origin",
      method: "POST",
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
    let itineraries = this.state.itineraries.map(itinerary =>
      <ItineraryComponent
      id={itinerary.id}
      key={itinerary.id}
      notes={itinerary.notes}
      />
    )

    let itinForm = null
    if (this.props.showNewItin) {
      itinForm = <ItineraryForm addItin={this.addItin} />
    }
    return(
      <div>
        <div>
          THIS IS THE ITIN INDEX PAGE
        </div>
        {itinForm}
        {itineraries}
      </div>
    )
  }
}

export default ItineraryIndex
