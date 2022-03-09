import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";

function Navigation() {

  return (
    <ul id="nav-ul">
      <li className="nav-li"><NavLink className="nav-link" to="/">Product</NavLink></li>
      <li className="nav-li"><NavLink className="nav-link" to="/admin">Admin</NavLink></li>
    </ul>
  );

}
export default Navigation;