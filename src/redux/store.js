import { configureStore } from '@reduxjs/toolkit';
import {userReducer} from './reducers/userReducer';

const store = configureStore({
  reducer: {
    // Add reducers here
    user: userReducer,
  },
});

export default store;

export const server = 'https://course-app-backend.vercel.app/api/v1';
