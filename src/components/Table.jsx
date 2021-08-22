import React, { useState, useEffect } from "react";

import Square from "./Square";

// STYLESHEETS
// import "./table.css";
//import "../styles/nav.scss";

export default function Table(props) {
  // const [time, setTime] = useState(new Date());
  // useEffect(() => {
  //   const interval = setInterval(() => setTime(new Date()), 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div>
    <h1>I'm table</h1>
    <Square 
    view="openNumber"
    numberB="3"
    />
    <Square 
    view="flag"
    />
    <Square 
    view="openBomb"
    />
    <Square 
    view="openEmpty"
    />
    <Square />
    </div>
  );
}
