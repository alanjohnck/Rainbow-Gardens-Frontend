import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './App/Home/Home';
import Product from './App/Product/Product';
import Contact from './App/Contact/Contact';
import Category from './App/Category/Category';
import ThankYou from './App/ThankYou/ThankYou';
import Plants from './App/Plants/Plants';
import AdminDashBoard from './App/Admin/Admindashboard/adminDashboard';
import ProductAdding from './App/Admin/adminProductAdding/productAdding';
import AdminEditSection from './App/Admin/AdminEditSection/AdminEditSection';
import AdminLogin from './App/AdminLogin/adminLogin';
import PasswordReset from './App/AdminLogin/passwordReset';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/category' element={<Category/>}/>
          <Route path='/thankyou' element={<ThankYou/>}/>
          <Route path='/plants/:plantsCategoryParams' element={<Plants />} />
          <Route path='/adminDashboard' element={<AdminDashBoard/>}/>
          <Route path='/productAdding' element={<ProductAdding/>}/>
          <Route path='/adminEditSection' element={<AdminEditSection />} />
          <Route path='/adminLogin' element={<AdminLogin />} />
          <Route path='/resetPassword' element={<PasswordReset />} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
