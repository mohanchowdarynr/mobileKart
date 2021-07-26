import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";

const Navbar = () => {
  const { totalItems } = useContext(ProductContext);
  return (
    <>
      <nav className="container flex justify-between items-center w-screen py-6 bg-gray-700 text-white mx-auto">
        <h1 className="px-4 font-black text-base md:text-xl">
          <Link to="/">
            <span className="text-red-500">Mobile</span>Kart
          </Link>
        </h1>
        <ul className="flex items-center text-base md:text-lg  font-semibold">
          <li className="mr-6 rounded-full hover:text-red-700">
            <Link to="/">Home </Link>
          </li>
          <li className="mr-6 hover:text-red-700">
            <Link to="/ProductsPage">Products</Link>
          </li>
          <li className="flex mr-6 hover:text-red-700 items-center">
            <Link to="/CartPage">
              Cart <span className="text-red-700">( {totalItems} )</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
