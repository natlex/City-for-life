import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink className="button" to="/login">Log In</NavLink>
      <NavLink className="button" to="/map">Map</NavLink>
    </div>
  );
}

export default Navbar;