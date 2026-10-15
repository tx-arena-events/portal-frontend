import { createApi } from '@reduxjs/toolkit/query/react';
import { apiBaseQuery } from './base.query';

export const apiBase = createApi({
  reducerPath: 'apiBase',
  baseQuery: apiBaseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
