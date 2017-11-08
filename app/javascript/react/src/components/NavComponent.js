import React from 'react';

const NavComponent = props => {
  let bar
  if (props.currentUser) {
    bar = (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href={`/users/${props.currentUser.id}/itineraries`}>Itineraries</a></li>
          <li><a href="/about">About</a></li>
          <div className="right">
            <li>Welcome, {props.currentUser.first_name}</li>
            <li onClick={props.handleSignOut}><a>Sign out</a></li>
          </div>
        </ul>
      </nav>
    )
  } else {

    bar = (
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li onClick={props.handleSignIn} className="right">Sign in</li>
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
