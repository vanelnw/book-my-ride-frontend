import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const backendURL = 'http://127.0.0.1:4000';

export const createReservation = createAsyncThunk(
  'addReservation/createReservation',
  async ({ reservationDate, dueDate, carId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('userToken');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const reservationData = {
        reservation: {
          reservation_date: reservationDate,
          due_date: dueDate,
          car_id: carId,
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/reservations/`,
        reservationData,
        config,
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const initialState = { loading: false, reservation: '', error: '' };

const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createReservation.pending, (state) => {
      const newState = { ...state, loading: true };
      return newState;
    });
    builder.addCase(createReservation.fulfilled, (state, action) => {
      const newState = { ...state, reservation: action.payload, loading: false };
      return newState;
    });
    builder.addCase(createReservation.rejected, (state, action) => {
      const newState = { ...state, reservation: '', error: action.error.message };
      return newState;
    });
  },
});

export default addReservationSlice.reducer;
