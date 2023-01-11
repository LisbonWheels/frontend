import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar-container">
          <div className="logo-container">
            <NavLink to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </NavLink>
          </div>
          <div className="list-container">
          <li className="nav-item">
            <NavLink to="/" style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none", fontWeight: isActive ? 700 : 500})}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" style={({ isActive }) => ({textDecoration: isActive ? "underline" : "none", fontWeight: isActive ? 700: 500})}>
              User
            </NavLink>
          </li>
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar