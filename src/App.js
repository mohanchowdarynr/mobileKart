import React, { useContext } from 'react'
import Home from './Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './Components/Navbar';
import ProductsPage from './Pages/ProductsPage';
import { ProductContext } from './ProductContext';

const App = () => {
  return (
    <>
    <Router>
     <ProductContext.Provider value={2}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/ProductsPage" component={ProductsPage}></Route>
      </Switch>
      </ProductContext.Provider>
    </Router>
    </>
  )
}

export default App

