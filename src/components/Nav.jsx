import React, { useState, useEffect } from "react";
import Timer from "./Timer";

// STYLESHEETS
import "../style/Nav.css";


export default function Nav(props) {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav">
      <div className="dropdown" onClick={() => setShow((s) => !s)} >
        <button className="dropbtn">Dropdown <i className="fas fa-caret-down"></i></button>
        <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
          <a href="#">Easy</a>
          <a href="#">Medium</a>
          <a href="#">Hard</a>
        </div>
      </div>
        <ul className="nav-menu">
          <li className="nav-menu-item">
            <i className="far fa-clock"></i>
            &nbsp;&nbsp;
            <div>
            <Timer />
            </div>
          </li>
          <li className="nav-menu-item">
          <i class="fas fa-flag-checkered fa-lg"></i>
            &nbsp;&nbsp;
            <h6>number</h6>
          </li>
          <li className="nav-menu-item">
            <i className="fas fa-times"></i>
          </li>
        </ul>
    </nav>
  );
}
