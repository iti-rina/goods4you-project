import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../api';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProductById: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetProductByIdQuery} = productApi;