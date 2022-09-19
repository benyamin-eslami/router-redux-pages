import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { isLogin: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
