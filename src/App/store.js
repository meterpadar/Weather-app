import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from './../slices/citiesSlice.js';

export const store = configureStore({
  reducer: {
    cities: citiesReducer,
  }
});