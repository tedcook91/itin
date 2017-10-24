import React from 'react';
import { Link } from 'react-router-dom';

//import BackButton from './BackButton';

const NavBar = props => {
  return(
    <div>
      <Link to='/'>Home</Link>
      <Link to="/itineraries">Itineraries</Link>
    </div>
  )
}

export default NavBar;
