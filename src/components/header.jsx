import React from 'react';
import { NavLink } from 'react-router-dom';

import hero from '../assets/banner.jpg'; 

const Header = () => {
  return (
    <header
      className="header_section"
      style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', height: '10vh' }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-transparent custom_nav-container">
          <NavLink className="navbar-brand" to="/">
            <span>Delicious Grill</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active1"
                  exact
                  to="/"
                >
                  Restaurant
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active1"
                  to="/menu"
                >
                  Menu
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active1"
                  to="/archives"
                >
                  Archives
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active1"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active1"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
