import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const backendURL = 'https://rent-your-car.onrender.com';

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
      const response = await fetch(`${backendURL}/api/v1/reservations/`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(reservationData),
      });
      const data = await response.json();

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return data;
    } catch (error) {
      const message = error.response ? error.response.data.message : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  },
);

const initialState = { loading: false, reservation: '', error: '' };

const addReservationSlice = createSlice({
  name: 'addReservation',
  initialState,
  reducers: {},
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
