import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cardataReducer from '../Redux/carsList/carsListSlice';

const store = configureStore({
  reducer: {
    cardata: cardataReducer,
    auth: authReducer,
  },
});

export default store;
