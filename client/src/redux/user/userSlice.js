import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  error: null,
  loading: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInStart: (state) => {
      console.log('signInStart action dispatched');  // Debugging log
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      console.log('signInSuccess action dispatched', action.payload);  // Debugging log
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      console.log('signInFailure action dispatched', action.payload);  // Debugging log
      state.error = action.payload;
      state.loading = false;
    },
    signOut: (state) => {
      state.currentUser = null;
      state.error = null;
      state.loading = false;
    }
  }
});

export const { signInStart,signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;
