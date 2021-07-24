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

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/ProductsPage" component={ProductsPage}></Route>
        <Route path="/CartPage" component={CartPage}></Route>
      </Switch>
      <BottomBar />
    </Router>
    </div>
  )
}

export default App

