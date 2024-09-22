import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { USER_ID } from '../api';

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const response = await fetch(`https://dummyjson.com/carts/user/${USER_ID}`);
  if (!response.ok) {
    throw new Error('Ошибка при загрузке данных');
  }
  const data = await response.json();
  return data.carts[0];
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
