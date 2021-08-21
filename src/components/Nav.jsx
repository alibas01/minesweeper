import React, { useState, useEffect } from "react";
import Timer from "./Timer";

// STYLESHEETS
import "../style/Nav.css";

export default function Nav(props) {
  return (
    <nav className="nav">
      <div className="dropdown">
        <button className="dropbtn">Dropdown <i className="fas fa-caret-down"></i></button>
        <div className="dropdown-content">
          <a href="#">Easy</a>
          <a href="#">Medium</a>
          <a href="#">Hard</a>
        </div>
      </div>
      <div className="measures">
        <ul className="nav-menu">
          <li className="flag">
            <i className="fas fa-flag"></i>
            <h6>number</h6>
          </li>
          <li className="clock">
            <i className="far fa-clock"></i>
            <Timer />
          </li>
          <li className="close">
            <i className="fas fa-times"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
}
