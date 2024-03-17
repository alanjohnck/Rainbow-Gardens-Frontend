import logo from './logo.svg';
import './App.css';
import Navbar from './app/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './app/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
