import {createSlice} from '@reduxjs/toolkit';
import {TestPerson} from './dummy-data';

// const initialState = {
//   _id: '',
//   name: '',
//   phone: '',
//   pin: '',
//   token: '',
//   balance: 0,
//   monthlyLimit: 0,
// };

export const userSlice = createSlice({
  name: 'user',
  initialState: TestPerson,
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
