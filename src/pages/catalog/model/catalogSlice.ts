import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, LIMIT } from '../api';
export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    searchByTitle: builder.query({
      query: ({ title, skip }) => `?q=${title}&${LIMIT ? `limit=${LIMIT}` : ''}&skip=${skip}`,
    }),
  }),
});

export const { useSearchByTitleQuery } = catalogApi;

