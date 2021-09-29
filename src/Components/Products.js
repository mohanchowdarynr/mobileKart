import React, { useContext } from "react";
import Mobile from "./Mobile";
import ProductContext from "../Context/ProductContext";

const Products = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const data = products
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-8">
      {data && data.map((item) => <Mobile item={item} key={item.itemId} />)}
    </div>
  );
};

export default Products;
