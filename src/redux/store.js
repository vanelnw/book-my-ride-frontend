// import { createStore } from 'redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';

// Define the initial state of the store
const initialState = {
  cars: [],
};

// Define the reducer function
function carReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CAR':
      return {
        ...state,
        cars: [...state.cars, action.payload],
      };
    default:
      return state;
  }
}

// Create the Redux store
const store = configureStore(carReducer);

export default store;
