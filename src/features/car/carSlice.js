/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getCarDetails } from './carActions';

const initialState = {
  loading: false,
  userInfo: {},
  userToken: null,
  error: null,
  success: false,
};

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {},
  extraReducers: {
    [getCarDetails.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export default carSlice.reducer;
