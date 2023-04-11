/* eslint-disable no-param-reassign */
/* eslint-disable no-else-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('data/fetchItems', async () => {
  const jwtToken = localStorage.getItem('userToken'); // assuming your JWT token is stored in your Redux store
  const headers = {
    Authorization: `Bearer ${jwtToken}`,
  };
  const response = await fetch('http://127.0.0.1:4000/api/v1/reservations', {
    headers,
  });
  const data = await response.json();
  if (response.ok) {
    return data.reservations;
  } else {
    throw new Error(data.message);
  }
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {},
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export default dataSlice.reducer;
