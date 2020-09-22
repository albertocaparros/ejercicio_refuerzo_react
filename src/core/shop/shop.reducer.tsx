import { ADD_SHOPITEM, DELETE_SHOPITEM } from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_SHOPITEM:
      return {
        ...state,
        shopCart: [...state.shopCart, action.payload],
      };
    case DELETE_SHOPITEM:
      return {
        ...state,
        shopCart: state.shopCart.filter(
          shopItem => shopItem.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
