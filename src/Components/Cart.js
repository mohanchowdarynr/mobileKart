import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Context/ProductContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [price, setPrice] = useState();
  const { cartItems, orderItem } = useContext(ProductContext);
  const cart = cartItems;

  useEffect(() => {
    setPrice(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  const notify = () => toast.success("ordered successfully", { position: toast.POSITION.BOTTOM_CENTER});

  if (cart.length < 1) {
    return (
      <div className="flex flex-col w-11/12 mx-auto min-h-screen">
        <div className="flex flex-col m-auto justify-center items-center">
          <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 mb-3">
            Your cart is empty{" "}
          </h1>
          <Link to="/ProductsPage">
            <button className="p-2 m-auto bg-red-500 text-gray-50">
              Add products
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="w-11/12 mx-auto min-h-screen">
    
      <h1 className="text-base md:text-xl font-bold my-2 text-gray-700 text-center">
        Cart Items
      </h1>
      <div className="flex">
        <div className="mx-auto">
          {cart && cart.map((item) => <CartItem item={item} />)}
        </div>
        <div className="w-1/4 h-2/4 border border-gray-600 rounded-2xl border-opacity-10 ml-4 md:ml-0 mt-4 text-center py-3">
          <h1 className="font-medium md:font-bold ">Cart </h1>
          <h1 className="font-normal md:font-medium text-gray-700 tracking-wide">
            Cost : <span className="text-red-500">{price}</span>
          </h1>
          <h1 className="font-normal md:font-medium text-gray-700 tracking-wide pb-2">
            Delivery : <span className="text-red-500">Free</span>
          </h1>
          <h1 className="font-medium md:font-bold text-gray-700 tracking-wide border-t-2 border-opacity-8 py-2">
            Total : <span>{price}</span>
          </h1>
          <button
            className="p-2 bg-red-500 text-gray-50 font-bold rounded"
            onClick={() => {
              orderItem();
              notify();
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
