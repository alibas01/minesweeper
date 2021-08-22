import React, {useState} from 'react';
import '../style/App.css';
import Nav from './Nav';
import Table from './Table';

function App() {

  

  return (
    <div className="layout">
        <Nav />
        <Table />
    </div>
  );
}

export default App;