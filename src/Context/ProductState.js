import { addToCart, removeFromCart, saveForLater, moveToCart,orderCart } from "./Types";
import { productsList } from "../dummyData";
import { useEffect, useReducer} from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

const ProductState = ({ children }) => {

  const initialState = {
    products: productsList,
    cartItems: getCartItems(),
    saveForLater: getSavedItems(),
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  function getCartItems() {
    let cart = localStorage.getItem("cart");
    if (cart) {
      return JSON.parse(localStorage.getItem("cart"));
    } else {
      return [];
    }
  }
  function getSavedItems() {
    let cart = localStorage.getItem("saved");
    if (cart) {
      return JSON.parse(localStorage.getItem("saved"));
    } else {
      return [];
    }
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(state.saveForLater));
  }, [state.saveForLater]);

  const addCart = (item) => {
    dispatch({ type: addToCart, payload: item });
  };
  const removeCart = (id) => {
    dispatch({ type: removeFromCart, payload: id });
  };
  const saveCart = (item) => {
    dispatch({ type: saveForLater, payload: item });
  };
  const moveCart = (item) => {
    dispatch({ type: moveToCart, payload: item });
  };
  const orderItem = () => {
    console.log('ordered');
    dispatch({ type: orderCart });
  }

  return (
    <ProductContext.Provider
      value={{
        cartItems: state.cartItems,
        saveLater: state.saveForLater,
        products: state.products,
        addCart,
        saveCart,
        removeCart,
        moveCart,
        orderItem
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
export default ProductState;
