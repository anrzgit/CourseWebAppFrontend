import { configureStore } from '@reduxjs/toolkit';
import {profileReducer, subscriptionReducer, userReducer} from './reducers/userReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['message'],
};

const  persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    // Add reducers here
    user: persistedReducer,
    profile: profileReducer,
    course: courseReducer,
    subscription : subscriptionReducer,
    admin : adminReducer,
    other : otherReducer
  },
});

export const persistor = persistStore(store);

export default store;

export const server = 'https://coursewebapp-kebc.onrender.com/api/v1';


// export const server = 'http://localhost:8000/api/v1';

