import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './app/Home/Home';
import Category from './app/Category/Category';
import OutdoorPlants from './app/OutdoorPlants/OutdoorPlants';
import Product from './app/Product/Product';
import Cart from './app/Cart/Cart';
import Contact from './app/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/category' element={<Category/>}/>
          <Route path='/outdoorplants' element={<OutdoorPlants/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
