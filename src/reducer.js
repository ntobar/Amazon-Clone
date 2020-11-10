export const initialState = {
  basket: [],
};

//This is a selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
      } else {
        console.warn(
          `Cannot remove product (id: ${action.id}) because it's not in the cart`
        );
      }

    default:
      return state;
  }
};

export default reducer;
