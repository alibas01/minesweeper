import React, { useState } from "react";

// STYLESHEETS
// import "./table.css";
import "../style/Square.css";

export default function Square(props) {
  const [view, setView] = useState("hidden");

  const numberBombs = props.numberBombs;
  const value = props.value;
  const flagCount = props.flagCount;
  const setFlagCount = props.setFlagCount;
  const trueFlagCount = props.trueFlagCount;
  const setTrueFlagCount = props.setTrueFlagCount;
  const freeze = props.freeze;
  const setFreeze = props.setFreeze;
  const end = props.end;

  // const hide = function() {
  //   setTimeout(() => {
  //     setView("hidden");
  //   }, 5000);
  // }
    

  const squareMode = function () {
    if (view === "flag") {
      return (
        <i
          className="fas fa-flag fa-lg"
          onClick={() => !freeze && setView("visible")}
          onContextMenu={() => {
            !freeze && setView("hidden");
            !freeze && setFlagCount(flagCount + 1);
            value && setTrueFlagCount(trueFlagCount - 1);
          }}
        ></i>
      );
    } else if (view === "hidden") {
      return (
        <i
          className="far fa-square fa-2x"
          onClick={() => !freeze && setView("visible")}
          onContextMenu={() => {
            !freeze && setView("flag");
            !freeze && setFlagCount(flagCount - 1);
            value && setTrueFlagCount(trueFlagCount + 1);
          }}
        ></i>
      );
    } else if (view === "visible" && value) {
      return <i className="fas fa-bomb fa-lg" onChange={setFreeze(true)} ></i>; //game over
    } else if (view === "visible" && !value && numberBombs !== 0) {
      return (
        <div className="numbericon">
          <p>{`${numberBombs}`}</p>
        </div>
      );
    } else if (view === "visible" && !value && numberBombs === 0) {
      return <i className="fas fa-square fa-2x"></i>;
    }
  };

  const endedMode = function () {
    if (end) {
      if ((view === "hidden" || view === "flag") && value) 
        return <i className="fas fa-bomb fa-lg" />;
      else if ((view === "hidden" || view === "flag") && numberBombs === 0 ) 
        return <i className="fas fa-square fa-2x" ></i>;
      else if ((view === "hidden" || view === "flag") && numberBombs !== 0 ) {
        return( 
            <div className="numbericon" >
            <p>{`${numberBombs}`}</p>
          </div>
        );
        } else if (view === "visible" && value) {
          return <i className="fas fa-bomb fa-lg" />;
        } else if (view === "visible" && !value && numberBombs !== 0) {
          return (
            <div className="numbericon" >
              <p>{`${numberBombs}`}</p>
            </div>
          );
        } else if (view === "visible" && !value && numberBombs === 0) {
          return <i className="fas fa-square fa-2x" ></i>;
        }
      }
  };


  return (
    <div>
    {end ? endedMode() : squareMode()}
    </div>
  );
}
