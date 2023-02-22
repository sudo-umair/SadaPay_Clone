import {createSlice} from '@reduxjs/toolkit';
import {IUser} from '../models/User';

const initialState: IUser = {
  _id: '',
  name: '',
  phone: '',
  pin: '',
  token: '',
  balance: 0,
  monthlyLimit: 0,
  type: 'sign-up',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setTempUser: (state, action) => {
      state.phone = action.payload.phone;
      state.name = action.payload.name;
      state.type = action.payload.type;
    },
    setType: (state, action) => {
      state.type = action.payload.type;
    },
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

export const {removeUser, setUser, setType, setTempUser} = userSlice.actions;

export default userSlice.reducer;
