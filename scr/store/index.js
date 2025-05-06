import { configureStore } from '@reduxjs/toolkit';
import complaintReducer from '../reducers/complaintReducer';

export const store = configureStore({
  reducer: {
    complaints: complaintReducer,
  },
});
