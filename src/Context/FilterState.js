import React from 'react'
import { productsList } from "../dummyData";
const FilterState = () => {
    // const data = productsList;

    const initialState = {
        products : productsList,
        filtered_products: [],
        sort: 'high-low'
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            
        </div>
    )
}

export default FilterState
