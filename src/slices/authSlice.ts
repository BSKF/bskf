import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";

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

interface AuthState {
  currentUser: null | User;
  token: string | null;
  loading: boolean;
  error: string | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  currentUser: null,
  token: null,
  loading: false,
  error: null,
  isLoggedIn: false,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: { loginid: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/records/login", credentials);
      // console.log("Login response:", response.data);
      return response.data; // expected: { user: { email, role }, token }
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

export const createUser = createAsyncThunk(
  "auth/createUser",
  async (
    { userData, token }: { userData: { email: string; username: string; password: string; firstname: string; lastname: string; middlename: string; role: string; address: string; phone_number: number }, token: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        "/records",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "User creation failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.token = null;
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user_id");
      state.isLoggedIn = false;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        // console.log("Login fulfilled with payload:", action.payload.data.role);
        state.loading = false;
        state.currentUser = action.payload.data;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.error = null;

        // persist to localStorage
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("role", action.payload.data.role);
        localStorage.setItem("user_id", action.payload.data.user_id);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        console.log("Create user failed:", action.payload);
      });
    }
});

export const { logout, setIsLoggedIn, setLoading } = authSlice.actions;
export default authSlice.reducer;
