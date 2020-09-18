import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Image/Icon/Logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
      <nav className="nav">
        <ul>
          <li>
            <a href="/">
              <img className="logo" src={logo} alt="" />
            </a>
          </li>
          <li>
            <input type="text" placeholder="search" />
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/destination">Destination</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    );
};

export default Navbar;