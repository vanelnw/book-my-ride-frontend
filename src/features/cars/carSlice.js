/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, deleteCar } from './carActions';

const initialState = {
  loading: false,
  cars: [],
  error: null,
  success: false,
};

const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    removeCar: (state, action) => {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
  extraReducers: {

    [fetchCars.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.cars = payload;
    },
    [fetchCars.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // log in user
    [deleteCar.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteCar.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [deleteCar.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },

});

export const { removeCar } = carSlice.actions;

export default carSlice.reducer;
