import React from 'react';
import './style/App.css';
import Nav from './components/Nav';
import Table from './components/Table';

function App() {
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

export default App;
