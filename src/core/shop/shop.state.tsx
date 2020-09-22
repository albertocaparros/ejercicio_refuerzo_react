import React, { useReducer } from 'react';

import ShopContext from './shop.context';
import shopReducer from './shop.reducer';

import { ADD_SHOPITEM, DELETE_SHOPITEM } from './types';

export const ShopState = props => {
  const initalState = {
    shopCart: [
      {
        id: 0,
        picUrl: './src/assets/img/cloudoriginal.jpg',
        name: 'Cloud Strife',
        selected: false,
      },
      {
        id: 1,
        picUrl: './src/assets/img/aerithoriginal.jpg',
        name: 'Aerith Gainsborough',
        selected: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(shopReducer, initalState);

  //Get verificaciones
  const addShopItem = item => {
    dispatch({ type: ADD_SHOPITEM, payload: item });
  };

  const removeShopItem = id => {
    dispatch({ type: DELETE_SHOPITEM, payload: id });
  };

  return (
    <ShopContext.Provider
      value={{
        shopCart: state.shopCart,
        addShopItem,
        removeShopItem,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopState;
