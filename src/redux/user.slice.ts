import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  _id: '',
  name: '',
  email: '',
  pin: '',
  token: '',
  monthlyLimit: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.pin = action.payload.pin;
      state._id = action.payload._id;
      state.token = action.payload.token;
    },
    removeUser: state => {
      state.name = '';
      state.email = '';
      state.pin = '';
      state._id = '';
      state.token = '';
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
