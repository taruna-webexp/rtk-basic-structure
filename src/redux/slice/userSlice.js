import userApi from "@/services/usersApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  value: 0,
  users: [], // To store user data
  loading: false, // Loading state for API calls
  error: null, // Error state for API calls
};

// Create an async thunk to fetch all users
export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await userApi.getAllUsers(); // Call the API method to get all users
    return response; // Return the user data
  }
);

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when the request is fulfilled
        state.users = action.payload; // Store the fetched users in the state
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false; // Set loading to false if the request fails
        state.error = action.error.message; // Store the error message
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
