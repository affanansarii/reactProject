import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      state.splice(action.payload, 1);
    },
    removeAllCart(state, action) {
      return (state = initialState);
    },
  },
});

export const { addToCart, removeCart, removeAllCart } = cartSlice.actions;

export default cartSlice.reducer;
