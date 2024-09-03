import { createSlice } from "@reduxjs/toolkit";
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  pending: false,
  error: null,
  refreshPending: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(loginThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.pending = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;

        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(logoutThunk.pending, (state) => {
        state.pending = true;
      })
      .addCase(logoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })

      .addCase(refreshThunk.pending, (state) => {
        state.refreshPending = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.refreshPending = false;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.error = action.payload;
        state.refreshPending = false;
      });
  },
});

export const authReducer = slice.reducer;
