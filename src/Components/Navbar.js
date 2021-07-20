import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../Context/ProductContext'

const Navbar = () => {
    const { totalItems } = useContext(ProductContext);
    console.log(totalItems);
    return (
        <>
          <nav className="container flex justify-between items-center w-screen py-4 bg-gray-700 text-white font-serif mx-auto">
              <h1 className="px-4 font-black text-xl"><Link to="/"><span className="text-red-500">Mobile</span>Kart</Link></h1>
              <ul className="flex items-center">
                 <li className="mr-6 text-lg rounded-full hover:bg-red-700 p-2"><Link to="/">Home</Link></li> 
                 <li className="mr-6 text-lg  hover:text-red-700"><Link to="/ProductsPage">Products</Link></li> 
                 <li className="mr-6 text-lg  hover:text-red-700 align-center"><Link to="/CartPage">Cart <span className="text-red-500 font-black">{ totalItems }</span></Link></li> 
              </ul>
          </nav>  
        </>
    )
}

export default Navbar
