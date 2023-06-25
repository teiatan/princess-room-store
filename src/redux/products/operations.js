import { createAsyncThunk } from '@reduxjs/toolkit';
import * as apiOperations from 'service/productsRequests';

export const getAllProducts = createAsyncThunk(
  'tasks/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const data = await apiOperations.getAllProducts();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
