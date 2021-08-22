import React, { useState } from "react";
import Timer from "./Timer";
import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
import "../style/Nav.css";


export default function Nav(props) {
  const { show, setShow, difficulty, setDifficulty } = props;

  //const handleClick = (e) => {


  return (
    <nav className="nav">
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShow((s) => !s)} >Difficulty<i className="fas fa-caret-down"></i></button>
        <div className="dropdown-content" style={{ display: show ? "block" : "none" }}>
          <p onClick={() => setDifficulty("easy")}>Easy</p>
          <p onClick={() => setDifficulty("medium")}>Medium</p>
          <p onClick={() => setDifficulty("hard")}>Hard</p>
        </div>
      </div>
      <div className="difficulty">
        <button className="diffbtn" onClick={() => setShow((s) => !s)} >{difficulty} </button>
      </div>
      <div className="clock">
        <i className="far fa-clock"></i>
        &nbsp;&nbsp;
        <Timer />
      </div>
        <ul className="nav-menu">

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
