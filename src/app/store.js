import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import dataReducer from '../redux/reservationsList/reservationsListSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
  },
});

export default store;
