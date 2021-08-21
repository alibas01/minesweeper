import React from 'react'
import { useState, useEffect } from 'react';

const Timer = (props) => {
    const {initialSeconds = 0} = props;
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
        setSeconds(seconds => seconds + 1);

        }, 1000)

        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <div>
          <h5> {seconds}</h5> 
        </div>
    )
}

export default Timer;