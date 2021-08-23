import React from "react";
import Timer from "./Timer";

// STYLESHEETS
import "../style/Nav.css";

export default function Nav(props) {
  const {
    show,
    setShow,
    difficulty,
    setDifficulty,
    flagCount,
    freeze,
    setFreeze,
    start,
    setStart,
    setEnd,
    end,
  } = props;

  //console.log(props);
  const adjustClass = function (difficulty) {
    let clas = "nav-";
    if (difficulty === "Easy") {
      return clas + "Easy";
    } else if (difficulty === "Medium") {
      return clas + "Medium";
    } else {
      return clas + "Hard";
    }
  };

  return (
    <nav className={adjustClass(difficulty)}>
      <div className="dropdown">
        <button className="dropbtn" onClick={() => setShow((s) => !s)}>
          {difficulty}
          <i className="fas fa-caret-down"></i>
        </button>
        <div
          className="dropdown-content"
          style={{ display: show ? "block" : "none" }}
        >
          <p
            onClick={() => {
              setDifficulty("Easy");
              setShow((s) => !s);
            }}
          >
            Easy
          </p>
          <p
            onClick={() => {
              setDifficulty("Medium");
              setShow((s) => !s);
            }}
          >
            Medium
          </p>
          <p
            onClick={() => {
              setDifficulty("Hard");
              setShow((s) => !s);
            }}
          >
            Hard
          </p>
        </div>
      </div>
      <div className="difficulty">
        <button
          className="diffbtn"
          onClick={() => {
            setFreeze(false);
            setEnd(false);
            setStart(start + 1);
          }}
        >
          START{" "}
        </button>
      </div>
      <div className={difficulty === "Easy" ? "clock-Easy" : "clock"}>
        <i className="far fa-clock"></i>
        &nbsp;&nbsp;
        <Timer freeze={freeze} start={start} end={end} />
      </div>
      <ul className="nav-menu">
        <li
          className={
            difficulty === "Easy" ? "nav-menu-item-Easy" : "nav-menu-item"
          }
        >
          <i className="fas fa-flag-checkered fa-lg"></i>
          &nbsp;&nbsp;
          <h5>{flagCount}</h5>
        </li>
        <li
          className={
            difficulty === "Easy" ? "nav-menu-item-Easy" : "nav-menu-item"
          }
        >
          <i className="fas fa-times" onClick={() => setEnd(true)}></i>
        </li>
      </ul>
    </nav>
  );
}
