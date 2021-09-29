import React from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import ProductsPage from './Pages/ProductsPage';
import CartPage from './Pages/CartPage';
import BottomBar from './Components/BottomBar';
import Wishlist from './Pages/Wishlist';
import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="bg-gray-50 relative">
    <Router>
    <ToastContainer />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/ProductsPage" component={ProductsPage}></Route>
        <Route path="/CartPage" component={CartPage}></Route>
        <Route path="/Wishlist" component={Wishlist}></Route>
      </Switch>
      <BottomBar />
    </Router>
    </div>
  )
}

export default App

