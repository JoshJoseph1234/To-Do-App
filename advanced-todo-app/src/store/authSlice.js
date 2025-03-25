import { createSlice } from "@reduxjs/toolkit";

// Get authentication state from localStorage
const storedAuth = localStorage.getItem("isAuthenticated") === "true";

const initialState = {
  isAuthenticated: storedAuth,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("isAuthenticated", "true"); // Persist login state
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated"); // Clear login state
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
