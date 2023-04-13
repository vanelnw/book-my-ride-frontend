import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import dataReducer from './reservation/reservationsListSlice';
import carReducer from './car/carSlice';
import addReservationReducer from './reservation/addReservationSlice';

const store = configureStore({
  reducer: {
    data: dataReducer,
    auth: authReducer,
    cars: carReducer,
    addReservation: addReservationReducer,
  },
});

export default store;
