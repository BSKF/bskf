import axiosInstance from "./axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  email: string;
  firstname: string;
  middlename: string;
  lastname: string;
  address: string;
  phone_number: string;
  role: string;
  user_id: string;
}
interface UsersState {
  user: User | null;
  users: User[];
  loading: boolean;
  error: string | null;
}
const initialState: UsersState = {
  user: null,
  users: [],
  loading: false,
  error: null,
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axiosInstance.get("/records");
  return response.data;
});

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (userId: string) => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/records/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loading = false;
        // console.log("Setting current user:", action.payload);
        state.user = action.payload.data;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setUsers, setLoading, setError, setUser } =
  usersSlice.actions;
export default usersSlice.reducer;
