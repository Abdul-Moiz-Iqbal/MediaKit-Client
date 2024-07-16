// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './features/DashBoard/Images';
import HeaderSlice from './features/DashBoard/Header'

export const store = configureStore({
  reducer: {
    hero: imageReducer,
    header: HeaderSlice
  },
});

export default store;
