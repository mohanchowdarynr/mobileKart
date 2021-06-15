import React from 'react'
import Products from '../Components/Products'

const ProductsPage = () => {
    return (
        <div className="w-11/12 mx-auto">
        <h1 className="text-3xl font-bold my-2 text-gray-700 text-center">Products</h1>
          <div className="detailsPage ">
            <Products />
          </div>
        </div>
    )
}

export default ProductsPage