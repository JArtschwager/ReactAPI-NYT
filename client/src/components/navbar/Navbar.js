import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
    backgroundColor: 'rgba(247, 243, 243, 0.845)',
    borderBottom: '1px solid gray',


}

const Navbar = () => (
  <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={navStyle}>
    <div class="container">

        <NavLink className="navbar-brand" to="/">NYT React Search</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/saved">Saved</NavLink>
            </li>
          </ul>
        </div>

 
    </div>
  </nav>
)

export default Navbar;