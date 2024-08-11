import { createSlice } from "@reduxjs/toolkit";
import loginUser from "../Action/getLoginApi";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    isAuthenticated:false,
    status: 'idle',
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.isAuthenticated=false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.isAuthenticated=true;
        state.user = action.payload;  
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.isAuthenticated=false;
        state.error = action.payload?.error || action.error.message;
      });
  }
});


export const { logout } = userSlice.actions;
export default userSlice.reducer;
