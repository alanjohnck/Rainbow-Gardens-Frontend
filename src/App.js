import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './app/Home/Home';
import Category from './app/Category/Category';
import OutdoorPlants from './app/OutdoorPlants/OutdoorPlants';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/category' element={<Category/>}/>
          <Route path='/outdoorplants' element={<OutdoorPlants/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
