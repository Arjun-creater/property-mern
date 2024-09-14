import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js';  // Use default import since it's exported as default

export const store = configureStore({
  reducer: {
    user: userReducer,  // Assign the imported reducer to the `user` key
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
