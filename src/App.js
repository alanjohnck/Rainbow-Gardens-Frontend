import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './App/Home/Home';
import Product from './App/Product/Product';
import Cart from './App/Cart/Cart';
import Contact from './App/Contact/Contact';
import Category from './App/Category/Category';
import ThankYou from './App/ThankYou/ThankYou';
import Plants from './App/Plants/Plants';
import AdminDashBoard from './App/Admin/Admindashboard/adminDashboard';
import ProductAdding from './App/Admin/adminProductAdding/productAdding';


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
          <Route path='/thankyou' element={<ThankYou/>}/>
          <Route path='/plants/:plantsCategory' element={<Plants />} />
          <Route path='/adminDashboard' element={<AdminDashBoard/>}/>
          <Route path='/productAdding' element={<ProductAdding/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
