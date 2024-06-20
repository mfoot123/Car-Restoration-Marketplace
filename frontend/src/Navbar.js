import React from 'react';
import { Link } from 'react-router-dom';
import './cover.css';
import logo from './SparkwerksLogo-transformed.webp';

function Navbar() {
  return (
    <header className="mb-auto">
        <img src={logo} alt="Logo" className="logo-img" />
<nav className="nav nav-masthead justify-content-center float-md-end">
        
      <div>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Navigation
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/before-after">
                  Before/After Gallery
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/testimonials">
                  Customer Testimonials
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/fuel-pump">
                  Fuel Pump Rebuild Process
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/distributor">
                  Distributor Restorations
                </Link>
              </li>
              <Link className="dropdown-item" to="/payments">
                  Cart
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
    </header>
    
  );
}

export default Navbar;
