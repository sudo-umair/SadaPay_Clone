import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../models/User';

const initialState: IUser = {
  _id: '0200202',
  name: 'Muhammad Umair',
  phone: '923211234567',
  pin: '0000',
  token: 'aj2ij3nq2nijqje2',
  balance: 10000,
  monthlyLimit: 100000,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.pin = action.payload.pin;
      state.balance = action.payload.balance;
      state.monthlyLimit = action.payload.monthlyLimit;
      state._id = action.payload._id;
      state.token = action.payload.token;
    },
    removeUser: state => {
      state.name = '';
      state.phone = '';
      state.pin = '';
      state.balance = 0;
      state.monthlyLimit = 0;
      state._id = '';
      state.token = '';
    },
  },
});

export const {removeUser, setUser} = userSlice.actions;

export default userSlice.reducer;
