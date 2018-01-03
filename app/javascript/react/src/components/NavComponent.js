import React from 'react';

const NavComponent = props => {
  let bar
  if (props.currentUser) {
    bar = (
      <nav className="navbar-container">
        <ul className="navbar">
          <div className="links">
            <li><a href="/">Home</a></li>
            <li><a href={`/users/${props.currentUser.id}/itineraries`}>Itineraries</a></li>
            <li><a href="/about">About</a></li>
          </div>
          <div className="logging">
            <li>Welcome, {props.currentUser.first_name}</li>
            <li onClick={props.handleSignOut}><a>Sign out</a></li>
          </div>
        </ul>
      </nav>
    )
  } else {

    bar = (
      <nav className="navbar-container">
        <ul className="navbar">
          <div className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </div>
          <div className="loggin">
            <li onClick={props.handleSignIn}><a>Sign in</a></li>
          </div>
        </ul>
      </nav>
    )
  }

  return(
    <div>
      {bar}
    </div>
  )
}


export default NavComponent
