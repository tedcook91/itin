import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class ItineraryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: props.match.params.user_id
    }
    this.fetchUser = this.fetchUser.bind(this)
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

  componentDidMount() {
    this.fetchUser()
  }

  render() {
    return(
      <div>
        THIS IS THE ITIN INDEX PAGE
        <div></div>
      </div>
    )
  }
}

export default ItineraryIndex
