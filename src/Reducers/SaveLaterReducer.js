export const SaveLaterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_SAVE_LATER":
      const isInSaveLater = state.saveLaterItems.find(
        (item) => item.id === action.payload.cartItem.id
      );
      return {
        saveLaterItems: !isInSaveLater
          ? [...state.saveLaterItems, action.payload.cartItem]
          : state.saveLaterItems,
      };
    case "REMOVE_FROM_SAVE_LATER":
      return {
        saveLaterItems: [
          ...state.saveLaterItems.filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    default:
      return state;
  }
};
