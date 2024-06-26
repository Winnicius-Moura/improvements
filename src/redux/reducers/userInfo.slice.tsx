import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginResponse } from '../../types/user';


const initialState: LoginResponse = {
  data: {
    token: '',
    userId: 0,
    username: '',
  },
  message: ""
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo(state, action: PayloadAction<LoginResponse>) {
      return action.payload;
    },
    clearUserInfo(state) {
      return initialState;
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
