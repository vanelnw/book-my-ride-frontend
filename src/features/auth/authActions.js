/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';

const backendURL = 'http://127.0.0.1:4000';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/auth/login`,
        { email, password },
        config,
      );
      // store user's token in local storage
      localStorage.setItem('userToken', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

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

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `${backendURL}/api/v1/auth/register/`,
        { username, email, password },
        config,
      );

      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });

      return data;
    } catch (error) {
    // return custom error message from backend if present
      const message = error.response ? error.response.data.message : error.message;
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  },
);
