import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import carReducer from '../features/car/carSlice';
import addReservationReducer from '../features/reservations/addReservationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cars: carReducer,
    addReservation: addReservationReducer,
  },
});

export default store;
