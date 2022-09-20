
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { cartReducers } from '../reducers/cartReducers';
import { productReducers } from '../reducers/productReducers';

const reducers = combineReducers({
  products: productReducers,
  carts: cartReducers
})
const store = createStore(reducers);

export {store};