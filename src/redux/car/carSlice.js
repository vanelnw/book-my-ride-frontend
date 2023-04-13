/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { deleteCar, addCar, fetchItems } from './carActions';

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

    [fetchItems.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.loading = false;
      state.cars = action.payload;
    },
    [fetchItems.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
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

    // add Car
    [addCar.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addCar.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.cars.push(payload);
    },
    [addCar.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },

});

export const selectCars = (state) => state.cars;

// eslint-disable-next-line max-len
export const selectCarById = (state, carId) => selectCars(state).cars.find((car) => car.id === carId);

export const { removeCar } = carSlice.actions;

export default carSlice.reducer;
