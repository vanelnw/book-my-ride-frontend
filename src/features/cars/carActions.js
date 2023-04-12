/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';

const backendURL = 'http://127.0.0.1:4000';

const token = localStorage.getItem('userToken');

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async (token, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.get(`${backendURL}/api/v1/cars`, config);
      const cars = response.data;

      return cars;
    } catch (error) {
      // Return custom error message from API if any
      const message = error.response ? error.response.data.message : error.message;

      // Use toast library to display error message
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return rejectWithValue(message);
    }
  },
);

export const deleteCar = createAsyncThunk(
  'car/delete',
  async ({ id }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(
        `${backendURL}/api/v1/cars/${id}`, config,
      );

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response ? error.response.data.message : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(message);
    }
  },
);
