import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { catalogApi } from '../pages/catalog/model/catalogSlice';
import { productApi } from '../pages/product/model/productSlice';
import cartSlice from '../pages/cart/model/cartSlice';

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogApi.middleware).concat(productApi.middleware),
});

setupListeners(store.dispatch);



