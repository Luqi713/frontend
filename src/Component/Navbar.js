import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Assets/Logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="Navlogo">
        <Link to="/">
          <img src={Logo} alt="Site Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/mens">Mens</Link>
        </li>
        <li>
          <Link to="/womens">Womens</Link>
        </li>
        <li>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
