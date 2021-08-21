import React, { useState, useEffect } from "react";
import Clock from "react-clock";

// STYLESHEETS
import "../styles/Clock.css";
import "../styles/nav.scss";

export default function Nav(props) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <nav className="nav">
      <section className="difficulty">
        <h1 className="title">{props.title + " Page"}</h1>
      </section>
      <div className="measures">
        <ul className="nav-menu">
          <li className="flag">
            <h6>flag</h6>
            <h6>number</h6>
          </li>
          <li className="clock">
          <Clock value={time} size={120} />
            <h6>seconds</h6>
          </li>
          <li className="close">
            <h6>crosss</h6>
          </li>
        </ul>
      </div>
    </nav>
  );
}
