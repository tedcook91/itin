import React from 'react';

const NavComponent = props => {
  let bar
  if (props.currentUser) {
    bar = (
      <div>
        <a href={`/${props.currentUser.id}`}>
          <div>
            {props.currentUser.first_name}
          </div>
          <div>
            {props.currentUser.email}
          </div>
        </a>
        <a href='/'>
          Home
        </a>
        <div onClick={props.handleSignOut}>
          Sign out
        </div>
    </div>
    )
  } else {
    bar = (
      <div>
        <a href='/'>
          <div>Home</div>
        </a>
        <div onClick={props.handleSignIn}>Sign in</div>
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
