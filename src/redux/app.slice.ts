import {createSlice} from '@reduxjs/toolkit';
import {IAppSlice} from './types';

const initialState: IAppSlice = {
  isLoading: false,
  isLoggedIn: false,
  isAuthenticated: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {setIsAuthenticated, setIsLoading, setIsLoggedIn} =
  appSlice.actions;

export default appSlice.reducer;
