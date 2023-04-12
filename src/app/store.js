import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carReducer from '../features/cars/carSlice';

const store = configureStore({
  reducer: {
    cardata: cardataReducer,
    auth: authReducer,
    cars: carReducer,
  },
});

export default store;
