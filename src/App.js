import logo from './logo.svg';
import './style/App.css';
import Nav from './components/Nav';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Nav />
      </nav>
      <div className="table">
        <Table />
      </div>
    </div>
  );
}

export default App;
