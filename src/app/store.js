import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carReducer from '../features/car/carSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
  },
});

export default store;
