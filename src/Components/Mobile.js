import React, { useContext } from "react";
import ProductContext from "../Context/ProductContext";

const Mobile = ({ item }) => {
  const { addCart } = useContext(ProductContext);
  // console.log(isAdded);
  return (
    <div className="content border border-gray-600 rounded-2xl border-opacity-10 ">
      <img
        className="img h-72 w-72 object-contain mx-auto"
        src={item.imageURL}
        alt={item.brand}
      />
      <div className="text-center">
        <h2 className="text-sm font-bold py-2 md:text-lg">{item.title}</h2>
        <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
          {item.description}
        </span>
      </div>
      <div className="flex justify-center items-center mt-4">
        <span className="bg-gray-200 px-2 md:px-4 rounded-full text-sm md:text-md mx-1 md:mx-2">
          ₹ {item.price}
        </span>
        <span className="bg-gray-200 px-4 rounded-full text-xs md:text-sm mx-2">
          {item.discount}% off
        </span>
      </div>
      <div className="justify-center mx-auto text-center mt-2">
        <button
          onClick={() => addCart(item)}
          className="bg-gray-700 text-white py-1 px-2 md:px-4 my-2 rounded-full font-medium md:font-bold"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Mobile;
