import React from 'react';
import '../style/App.css';
import Nav from './Nav';
import Table from './Table';

function MineWindow() {
  return (
    <div className="layout">
      <nav className="navbar">
        <Nav />
      </nav>
      <div className="table">
        <Table />
      </div>
    </div>
  );
}

export default MineWindow;