import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk('data/fetchItems', async () => {
  const jwtToken = localStorage.getItem('userToken');
  const headers = {
    Authorization: `Bearer ${jwtToken}`,
  };
  const response = await fetch('https://rent-your-car.onrender.com/api/v1/reservations', {
    headers,
  });
  const data = await response.json();
  if (response.ok) {
    return data.reservations;
  }
  throw new Error(data.message);
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      const newState = { ...state, items: action.payload, loading: false };
      return newState;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      const newState = { ...state, items: '', error: action.error.message };
      return newState;
    });
  },
});

export default dataSlice.reducer;
