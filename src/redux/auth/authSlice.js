/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { registerUser, userLogin } from './authActions';

const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null;

const isAuthenticated = !!localStorage.getItem('userToken');

const initialState = {
  loading: false,
  isAuthenticated,
  userInfo: {},
  userToken,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      localStorage.removeItem('user');
      state.loading = false;
      state.isAuthenticated = false;
      state.userInfo = null;
      state.userToken = null;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: {
    // log in user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.success = true;
      state.userInfo = payload;
      state.userToken = payload.userToken;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
