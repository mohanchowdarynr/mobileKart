import {addToCart, removeFromCart,saveForLater,moveToCart} from './Types';

import { useReducer} from "react";
import ProductContext from "./ProductContext";
import ProductReducer from './ProductReducer';

const ProductState = ({children}) => {
    const initialState = {
        cartItems:[],
        saveForLater:[],
        totalItems:0,
        savedItems:0
    }

const [state, dispatch] = useReducer(ProductReducer, initialState);

const addCart = item =>{
    state.totalItems =state.totalItems + 1;
     dispatch({ type: addToCart, payload: item })
     
 }
 const removeCart = id =>{
    state.totalItems -= 1;
     dispatch({ type: removeFromCart, payload: id })
     
 }
 const saveCart = item =>{
    state.totalItems -= 1;
    state.savedItems += 1;
    dispatch({ type: saveForLater, payload: item })
 }
 const moveCart = item => {
    state.savedItems -= 1;
    state.totalItems += 1;
    dispatch({ type: moveToCart, payload: item })
 }
 

    return (
        <ProductContext.Provider value={{cartItems:state.cartItems,addCart,saveCart,removeCart,moveCart,
        totalItems:state.totalItems,saveLater:state.saveForLater,savedItems:state.savedItems}}>
            {children}
        </ProductContext.Provider>
    )
}
export default ProductState;
