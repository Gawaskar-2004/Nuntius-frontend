import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Chat</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
