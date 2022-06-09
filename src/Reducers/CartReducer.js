export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartItems: [
          ...state.cartItems,
          { ...action.payload.product, quantity: 1 },
        ],
      };

    case "INCREMENT_QUANTITY":
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_PRODUCT":
      return {
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
