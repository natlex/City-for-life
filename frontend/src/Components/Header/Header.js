import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
          WELCOME TO THE CITY FOR LIFE
        </NavLink>
    </div>
  );
}

export default Header;