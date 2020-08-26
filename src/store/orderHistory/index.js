import { createSlice } from '@reduxjs/toolkit';

import { get } from '../../services/orderStore';

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: get(),
  reducers: {
    addToHistory: (state, action) => {
      const { payload } = action;
      console.log(payload);
      return [ ...state, payload];
    },
  }
});

export const {
  addToHistory,
} = orderHistorySlice.actions;

export default orderHistorySlice;