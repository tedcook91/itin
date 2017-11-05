import React from 'react';

const NavComponent = props => {
  let bar
  if (props.currentUser) {
    bar = (
      <div className="contain-to-grid">
      <nav className="top-bar" data-topbar role = "navigation">
        <div className="active">
          <span>
          <h2 className="left" ><a href='/'> Home </a></h2>
          <h2 className="left" ><a href={`/user/${props.currentUser.id}/itineraries`}> Itineraries </a></h2>
        </span>
        </div>
        <div>
        <a href={`/${props.currentUser.id}`}> {props.currentUser.first_name} </a>
        </div>
        <div onClick={props.handleSignOut} className="right">
          <h5>Sign out</h5>
        </div>
    </nav>
  </div>

    )
  } else {
    bar = (
      <div className="contain-to-grid">
        <nav className="top-bar" data-topbar role ="navigation">
      <div className="active">
        <h2 className="left" ><a href='/'>Home</a></h2>
        <h5 onClick={props.handleSignIn} className="right">Sign in</h5>
      </div>
    </nav>
    </div>
    )
  }

  return(
    <div>
      {bar}
    </div>

  )
}

export default NavComponent
