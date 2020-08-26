import { createSlice } from '@reduxjs/toolkit';

import exampleProducts from './initialState';

const productsSlice = createSlice({
  name: 'products',
  initialState: exampleProducts,
});

export default productsSlice;