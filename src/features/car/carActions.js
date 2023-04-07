/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';

const backendURL = 'http://127.0.0.1:4000';

export const getAllCars = createAsyncThunk();

export const getCarDetails = createAsyncThunk(
  'car/detail',
  async ({ carId }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('userToken');

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${backendURL}/api/v1/cars/${carId}`,
        config,
      );

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return data;
    } catch (error) {
      const message = error.response ? error.response.data.message : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(message);
    }
  },
);
