import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import usersServices from "../services/usersServices";

const initialState = {
  users: [],
  user: [],
};

export const allUsers = createAsyncThunk("users/allUsers", async () => {
  try {
    return await usersServices.allUsers();
  } catch (error: any) {
    const message =
      (error.message && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return message;
  }
});

export const singleUser = createAsyncThunk(
  "users/singleUser",
  async (userId: String, thunkAPI) => {
    try {
      return await usersServices.singleUser(userId);
    } catch (error: any) {
      const message =
        (error.message && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(allUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(singleUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = userSlice.actions;

export default userSlice.reducer;
