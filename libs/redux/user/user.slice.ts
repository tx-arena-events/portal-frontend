import { createSlice } from '@reduxjs/toolkit';
import { userState } from './user.state';

export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {},
});
