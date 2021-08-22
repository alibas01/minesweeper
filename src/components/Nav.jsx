import React, { useState } from "react";
import Timer from "./Timer";

// STYLESHEETS
import "../style/Nav.css";

export default function Nav(props) {
  const { show, setShow, difficulty, setDifficulty, flagCount } = props;

  const adjustClass = function(difficulty) {
    let clas = "nav-";
    if (difficulty === "easy") {
      return clas + "easy";
    } else if (difficulty === "medium") {
      return clas + "medium";
    } else {
      return clas + "hard";
    }
  }

  return (
    <nav className={adjustClass(difficulty)}>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShow((s) => !s)}>
          Difficulty<i className="fas fa-caret-down"></i>
        </button>
        <div
          className="dropdown-content"
          style={{ display: show ? "block" : "none" }}
        >
          <p
            onClick={() => {
              setDifficulty("easy");
              setShow((s) => !s);
            }}
          >
            Easy
          </p>
          <p
            onClick={() => {
              setDifficulty("medium");
              setShow((s) => !s);
            }}
          >
            Medium
          </p>
          <p
            onClick={() => {
              setDifficulty("hard");
              setShow((s) => !s);
            }}
          >
            Hard
          </p>
        </div>
      </div>
      <div className="difficulty">
        <button className="diffbtn" onClick={() => setShow((s) => !s)}>
          {difficulty}{" "}
        </button>
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
          <h5>{flagCount}</h5>
        </li>
        <li className="nav-menu-item">
          <i className="fas fa-times"></i>
        </li>
      </ul>
    </nav>
  );
}
