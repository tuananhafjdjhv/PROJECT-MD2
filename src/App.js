
import './App.css';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';

import Home from './components/Home';
import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/admin-addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/admin-editproduct" element={<EditProduct/>}></Route>
      </Routes>
      </div>
    
  );

}

