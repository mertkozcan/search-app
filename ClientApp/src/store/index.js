import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './searchSlice';


// ==============================|| REDUX - MAIN STORE ||============================== //

export const store = configureStore({
    reducer: {
        search:searchSlice
    }
  })