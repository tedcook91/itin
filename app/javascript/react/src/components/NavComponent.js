import React from 'react';

const NavComponent = props => {
  let bar
  if (props.currentUser) {
    bar = (
      <div className="contain-to-grid">
        <nav className="top-bar" data-topbar role = "navigation">
          <ul class="title-area">
            <li className="name">
              <a href='/'><h2>Home</h2></a>
            </li>
          </ul>
          <section className="top-bar-section">
            <div className="active">
              <span>
                <h2 className="left" ><a href={`/users/${props.currentUser.id}/itineraries`}> Itineraries </a></h2>
              </span>
            </div>
          </section>
          <section className="top-bar-section">
            <ul className="right">
              <li><a href={`/${props.currentUser.id}`}> {props.currentUser.first_name} </a></li>
                <div onClick={props.handleSignOut}>
                  <li><h5>Sign out</h5></li>
                </div>
            </ul>
          </section>
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
