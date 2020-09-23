import React, { useReducer } from 'react';

import ShopContext from './shop.context';
import shopReducer from './shop.reducer';

import { ADD_SHOPITEM, DELETE_SHOPITEM, EMPTY_LIST } from './types';

export const ShopState = props => {
  const initalState = {
    shopCart: [],
  };

  const [state, dispatch] = useReducer(shopReducer, initalState);

  const addShopItem = item => {
    dispatch({ type: ADD_SHOPITEM, payload: item });
  };

  const removeShopItem = id => {
    dispatch({ type: DELETE_SHOPITEM, payload: id });
  };

  const isInCart = id => {
    return state.shopCart.find(item => item.id === id) !== undefined;
  };

  const emptyList = () => {
    dispatch({ type: EMPTY_LIST });
  };

  return (
    <ShopContext.Provider
      value={{
        shopCart: state.shopCart,
        addShopItem,
        removeShopItem,
        isInCart,
        emptyList,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
