import React, {useContext} from 'react';
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png"
import { ImHome } from 'react-icons/im';
import "./Navbar.css";
import UserContext from '../../context/UserContext';


const Navbar = () => {
  const { userDetails } = useContext(UserContext);
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
            <NavLink to="/" style={({ isActive }) => ({backgroundColor: isActive ? "rgb(72,147,163, 0.2)" : "#FFF", color: isActive ? "rgb(72,147,163)" : "###", fontWeight: isActive ? 700 : 600})}>
              <ImHome className='home-icon' /> Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/login" style={({ isActive }) => ({backgroundColor: isActive ? "rgb(72,147,163, 0.2)" : "#FFF", color: isActive ? "rgb(72,147,163)" : "###", fontWeight: isActive ? 700 : 600})}>
            {userDetails ? "Your profile" : "Log in"}
            </NavLink>
          </li>
         {userDetails !== null && <li className="nav-item" onClick={() => {
           localStorage.clear()
          window.location.reload()
          }}>
            <NavLink to="/" style={{backgroundColor: "#FFF", color: "###", fontWeight: 600}}>
              Logout
            </NavLink>
          </li>}
          </div>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar