import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container">
      <nav className="nav-bar">
        <NavLink to="/layout/chats" className="nav-link">Chats</NavLink>
        <NavLink to="/layout/contacts" className="nav-link">Contacts</NavLink>
        <NavLink to="/layout/settings" className="nav-link">Settings</NavLink>
      </nav>

      <div className="content">
        <Outlet /> {/* This renders the active tab's content */}
      </div>
    </div>
  );
};

export default Layout;
