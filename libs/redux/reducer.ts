import { combineReducers } from '@reduxjs/toolkit';
import { apiBase } from './base.api';

export const rootReducer = combineReducers({
  [apiBase.reducerPath]: apiBase.reducer,
});
