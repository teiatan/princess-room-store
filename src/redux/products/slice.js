import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts } from './operations';

const initialState = {
  allProducts: [],
  isLoading: false,
  error: null
};
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.allProducts = [];
    })
    .addCase(getAllProducts.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.allProducts = payload;
    })
    .addCase(getAllProducts.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })
  },
});

export const productsReducer = productsSlice.reducer;
