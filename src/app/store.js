import { configureStore } from '@reduxjs/toolkit';
import carReducer from '../features/car/carSlice';

const store = configureStore({
  reducer: {
    cars: carReducer,
  },
});

export default store;
