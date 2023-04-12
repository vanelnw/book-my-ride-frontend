import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carReducer from '../features/cars/carSlice';
import cardataReducer from '../Redux/carsList/carsListSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    cardata: cardataReducer,
  },
});

export default store;
