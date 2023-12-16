import "./index.css";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/">Main</Link>
      </li>
      <li>
        <Link to="/Compare">Compare</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
  );
}

export default NavBar;
