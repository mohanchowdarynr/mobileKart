import { addToCart, removeFromCart, saveForLater, moveToCart } from "./Types";

const ProductReducer = (state, action) => {
  switch (action.type) {
    case addToCart: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case removeFromCart: {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.itemId !== action.payload
        ),
      };
    }
    case saveForLater: {
      const filterCart = state.cartItems.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      return {
        ...state,
        cartItems: [...filterCart],
        saveForLater: [...state.saveForLater, action.payload],
      };
    }
    case moveToCart: {
      const movedCart = state.saveForLater.filter(
        (item) => item.itemId !== action.payload.itemId
      );
      return {
        ...state,
        saveForLater: [...movedCart],
        cartItems: [...state.cartItems, action.payload],
      };
    }

    default:
      return state;
  }
};

export default ProductReducer;
