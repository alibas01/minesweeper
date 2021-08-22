import React from 'react';
import useConditionsData from '../hooks/useConditionsData';
import '../style/App.css';
import Nav from './Nav';
import Table from './Table';

function App() {
  const { difficulty, setDifficulty, table, setTable, show, setShow } = useConditionsData();
  

  return (
    <div className="layout">
        <Nav 
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          show={show}
          setShow={setShow}
        />
        <Table
          table={table}
          setTable={setTable}
          difficulty={difficulty}        
        />
    </div>
  );
}

export default App;