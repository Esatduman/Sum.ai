
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Sum.ai-logo.png'; // Adjust the path if necessary
import '../Nav.css'; // Make sure to adjust the path based on your project structure

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;