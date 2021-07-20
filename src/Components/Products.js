import React, { useState } from 'react'
import { productsList } from "../dummyData";
import Mobile from './Mobile';

const Products = () => {
    const [list,setList] = useState(productsList);

    const data = [...list];
    return (
        <div className="productDetails grid grid-cols-4 gap-12 my-8">
            { data && data.map(item => <Mobile
            item={item} 
            key={item.itemId}
            />)}
        </div>
    )
}

export default Products
