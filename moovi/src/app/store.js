import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../slices/userSlice';
import { recordSlice } from '../slices/recordSlice';
import { librarySlice } from '../slices/librarySlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    record: recordSlice.reducer,
    library: librarySlice.reducer
  },
});