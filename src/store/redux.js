import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cart';
import productsSlice from './products';
import orderHistorySlice from './orderHistory';

const reducer = {
  cart: cartSlice.reducer,
  products: productsSlice.reducer,
  orderHistory: orderHistorySlice.reducer,
};

export default configureStore({
  reducer
})