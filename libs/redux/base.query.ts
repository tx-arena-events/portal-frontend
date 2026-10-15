import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { ENV } from '../env';

export const apiBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (
  args: string | FetchArgs,
  WebApi: BaseQueryApi,
  extraOptions: object,
) => {
  const baseUrl = ENV.getApiBase;
  const rawBaseQuery = fetchBaseQuery({
    baseUrl,
  });
  return rawBaseQuery(args, WebApi, extraOptions);
};
