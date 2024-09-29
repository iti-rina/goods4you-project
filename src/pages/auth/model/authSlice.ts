import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../api';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    tryAuth: builder.mutation({
      query: ({ username, password }) => ({
        url: '/auth/login',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'username': username, 'password': password})
      })
    }),
  }),
});

export const { useTryAuthMutation} = authApi;