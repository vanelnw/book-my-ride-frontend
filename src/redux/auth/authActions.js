/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const backendURL = 'https://rent-your-car.onrender.com';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      };
      const response = await fetch(`${backendURL}/api/v1/auth/login`, config);
      const data = await response.json();

      // store user's token in local storage
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return data;
    } catch (error) {
      // return custom error message from API if any
      const message = error.response
        ? error.response.data.message
        : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(message);
    }
  },
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      };
      const response = await fetch(`${backendURL}/api/v1/auth/register/`, config);
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
