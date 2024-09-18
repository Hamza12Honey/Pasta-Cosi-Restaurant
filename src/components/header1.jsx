import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ backgroundColor: 'black', position: 'fixed', width: '100%', zIndex: '1000' }}>
      <section
        id="topbar1"
        className="d-flex align-items-center fixed-top topbar1-transparent"
      >
        <div
          className="container-fluid container-xl d-flex align-items-center justify-content-center justify-content-lg-start"
        >
          <i className="bi bi-phone d-flex align-items-center"><span>+216 53 283 233</span></i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Mon-Thu: 12:00 AM - 23:00 PM</span></i>
          <i className="bi bi-clock ms-4 d-none d-lg-flex align-items-center"><span>Fri-Sun: 12:00 AM - 00:00 PM</span></i>
        </div>
      </section>

      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div
          className="container-fluid container-xl d-flex align-items-center justify-content-between"
        >
          <div className="logo me-auto">
            <h1><NavLink to="/">PastaCosi</NavLink></h1>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><NavLink to="/" className="nav-link scrollto" activeClassName="active">Menu</NavLink></li>
              
              <li><NavLink to="/gallery" className="nav-link scrollto" activeClassName="active">Gallery</NavLink></li>
              <li><NavLink to="/about" className="nav-link scrollto" activeClassName="active">About</NavLink></li>
              <li><NavLink to="/contact" className="nav-link scrollto" activeClassName="active">Contact</NavLink></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
