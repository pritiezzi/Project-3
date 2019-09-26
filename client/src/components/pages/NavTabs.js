import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
        
    
      
        
        Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/home"
          className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
        Profile 
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
        Directory
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/directory"
          className={window.location.pathname === "/directory" ? "nav-link active" : "nav-link"}
        >
        Sign in
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
