import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../api';

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchByTitle: builder.query({
      query: (title) => `?q=${title}`,
    }),
  }),
});

export const { useSearchByTitleQuery } = catalogApi;

