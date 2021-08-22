import React, {useState} from 'react';
import '../style/App.css';
import useConditionsData from "../hooks/useConditionsData";
import Nav from './Nav';
import Table from './Table';

function MineWindow() {

  

  return (
    <div className="layout">
        <Nav />
        <Table />
    </div>
  );
}

export default MineWindow;