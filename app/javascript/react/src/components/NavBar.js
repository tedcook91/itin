import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavComponent from '../components/NavComponent'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }

    this.handleSignInOut = this.handleSignInOut.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentUser()
  }

  fetchCurrentUser() {
    fetch("/api/v1/current-user", {
      credentials: "same-origin"
    }).then(res => res.json())
      .then(data => {
        this.setState({
          currentUser: data
        })
      })
  }

  handleSignIn() {
    window.location.replace("/auth/google")
  }


  handleSignOut() {
      fetch("/users/sign_out", {
        credentials: "same-origin",
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      }).then(() => {
        this.setState({
          currentUser: null
        })
      })
    }

  handleSignInOut() {
    let sign_in_or_out, method
    if (curruent_user) {
      sign_in_or_out = "sign_out"
      method = "delete"
    } else {
      sign_in_or_out = "sign_in"
      method = "post"
    }

    fetch(`/users/${sign_in_or_out}`, {
      method: method
    })

    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    return(
      <div>
      <NavComponent
        currentUser={this.state.currentUser}
        handleSignIn={this.handleSignIn}
        handleSignOut={this.handleSignOut}
        handleSignInOut={this.handleSignInOut}
      />
      </div>
    )
  }
}

export default NavBar;
