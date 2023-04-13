import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import dataReducer from '../redux/reservationsList/reservationsListSlice';
import carReducer from '../features/car/carSlice';
import addReservationReducer from '../features/reservations/addReservationSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
    cars: carReducer,
    addReservation: addReservationReducer,
  },
});

export default store;
