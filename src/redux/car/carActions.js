/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const backendURL = 'https://rent-your-car.onrender.com';

const token = localStorage.getItem('userToken');

export const fetchItems = createAsyncThunk('cardata/fetchItems', async (_, { rejectWithValue }) => {
  try {
    const jwtToken = localStorage.getItem('userToken'); // assuming your JWT token is stored in your Redux store
    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };
    const response = await fetch('https://rent-your-car.onrender.com/api/v1/cars', {
      headers,
    });
    const cardata = await response.json();

    return cardata;
  } catch (error) {
    const message = error.response ? error.response.data.message : error.message;
    toast.error(message, {
      position: toast.POSITION.TOP_CENTER,
    });

    return rejectWithValue(message);
  }
});

export const deleteCar = createAsyncThunk(
  'car/delete',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(`${backendURL}/api/v1/cars/${id}`, config);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete car.');
      }

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return data;
    } catch (error) {
      const message = error.message || 'Failed to delete car.';
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(message);
    }
  },
);

export const addCar = createAsyncThunk(
  'car/addCar',
  async (car, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(`${backendURL}/api/v1/cars/`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify(car),
      });
      const data = await response.json();

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return data;
    } catch (error) {
      // return custom error message from backend if present
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  },
);
