import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderID: '',
  products: [],
  totalProductsValue: 0,
  taxes: 0,
  billTo: '',
  shipTo: '',
  shippingCharger: 0,
  finalValue: '',
};

const cartSlice = createSlice({
  name: 'customerOrder',
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      const { payload } = action;
      return  { 
        ...state,
        products: [ ...state.products, payload],
      };
    },
    removeProduct: (state, action) => {
      const { payload } = action;
      const filteredCart = state.products.filter((prod) => prod.id !== payload);
      if(filteredCart){
        return {
          ...state,
          products: filteredCart,
        }
      }
    },
    alterProductQuantity: (state, action) => {
      const { payload } = action;
      const alteredProducts = state.products.map((prod) => {
        if(prod.id === payload.id){
          return {
            ...prod,
            quantity: payload.quantity,
          }
        } else {
          return prod;
        }
      })

      return {
        ...state,
        products: alteredProducts,
      }
    },
  }
});

export const {
  addProduct,
  removeProduct,
  alterProductQuantity,
} = cartSlice.actions

export default cartSlice;