import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './App/Home/Home';
import Product from './App/Product/Product';
import Cart from './App/Cart/Cart';
import Contact from './App/Contact/Contact';
import Category from './App/Category/Category';
<<<<<<< HEAD
import Plants from './App/Plants/Plants';
=======
import AdminDashBoard from './App/Admin/Admindashboard/adminDashboard';
import ProductAdding from './App/Admin/adminProductAdding/productAdding';
>>>>>>> admin


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/category' element={<Category/>}/>
<<<<<<< HEAD
          <Route path='/plants/:plantsCategory' element={<Plants />} />
=======
          <Route path='/adminDashboard' element={<AdminDashBoard/>}/>
          <Route path='/productAdding' element={<ProductAdding/>}/>
>>>>>>> admin
        </Routes>
      </Router>
    </div>
  );
}

export default App;
