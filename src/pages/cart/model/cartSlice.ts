import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const requestHeaders = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${window.localStorage.getItem('accessToken')}`
}

export const fetchCart = createAsyncThunk('cart/fetchCart', async (id: number) => {
  const response = await fetch(`https://dummyjson.com/auth/carts/user/${id}`, {
    headers: requestHeaders
  });
  if (!response.ok) {
    throw new Error('Error while fetching cart products');
  }
  const data = await response.json();
  return data.carts[0];
});

export const manageCart = createAsyncThunk('cart/manageCart', async ({id, products}) => {
  const response = await fetch(`https://dummyjson.com/auth/carts/${id}`, {
    headers: requestHeaders,
    method: 'PUT',
    body: JSON.stringify({
      'merge': false,
      'products': products
    })
  });
  if (!response.ok) {
    throw new Error('Error while fetching cart products');
  }
  const data = await response.json();
  return data;
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
      })
      .addCase(manageCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(manageCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      })
      .addCase(manageCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  },
});

export const selectCartProducts = (state) => state.cart.cart.products;
export const selectCartId = (state) => state.cart.cart.id;
export default cartSlice.reducer;
