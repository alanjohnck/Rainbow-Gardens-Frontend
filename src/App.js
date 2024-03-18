import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './app/Home/Home';
import Category from './app/Category/Category';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/category' element={<Category/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
