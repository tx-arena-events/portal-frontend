import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { apiBase } from './base.api';
import { rootReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiBase.middleware),
  enhancers: (getDefaultEnhancers) => getDefaultEnhancers(),
  devTools: true,
});

setupListeners(store.dispatch);
