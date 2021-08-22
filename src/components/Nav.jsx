import React, { useState } from "react";
import Timer from "./Timer";
import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
import "../style/Nav.css";


export default function Nav() {
  const [show, setShow] = useState(false);
  const [ diff, setDiff ] = useState("easy");

  return (
    <nav className="nav">
      <div className="dropdown" onClick={() => setShow((s) => !s)} >
        <button className="dropbtn">Difficulty:{diff} <i className="fas fa-caret-down"></i></button>
        <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
          <p onClick={setDiff("easy")}>Easy</p>
          <p onClick={setDiff("medium")}>Medium</p>
          <p onClick={setDiff("hard")}>Hard</p>
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
