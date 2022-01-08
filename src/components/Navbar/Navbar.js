import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <strong>Zia Ur Rehman</strong>
        </div>
        <ul className="links">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </label>
      </nav>
    </div>
  );
}

export default Navbar;
