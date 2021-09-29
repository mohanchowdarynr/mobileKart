import React from "react";
import Products from "../Components/Products";

const ProductsPage = () => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      <h1 className="text-xl md:text-3xl font-bold my-2 text-gray-700 text-center">
        Products
      </h1>
      <div className="flex">
      {/* <div className="flex-auto">
        <Filters />
        </div> */}
        <div>
        <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
