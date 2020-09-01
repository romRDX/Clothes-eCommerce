import { createSlice } from '@reduxjs/toolkit';

import { get } from '../../services/orderStore';

const initialState = get();

const orderHistorySlice = createSlice({
  name: 'orderHistory',
  initialState: initialState ? initialState : [],
  reducers: {
    addToHistory: (state, action) => {
      const { payload } = action;
      return [ ...state, payload];
    },
  }
});

export const {
  addToHistory,
} = orderHistorySlice.actions;

export default orderHistorySlice;