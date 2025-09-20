import axiosInstance from "./axiosInstance";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface AssignedUser {
  user_id: string;
  username: string;
  firstname: string;
  middlename: string;
  lastname: string;
  email: string;
}
interface Task {
  task_id?: string;
  title: string;
  content: string;
  deadline: string;
  assigned_by: string;
  assigned_by_user?: AssignedUser;
  assigned_to_user?: AssignedUser;
  assigned_to: string;
  created_at?: string;
  updated_at?: string;
  is_complete?: boolean;
}

interface TaskState {
  task: Task | null;
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  task: null,
  tasks: [],
  loading: false,
  error: null,
};

export const getAllTasks = createAsyncThunk("tasks/getTasks", async () => {
  const response = await axiosInstance.get("/tasks/", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
});

export const getTaskByUserId = createAsyncThunk(
  "tasks/getTaskById",
  async (userId: string) => {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get(`/tasks/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

export const createTask = createAsyncThunk(
  "auth/createTask",
  async (
    { taskData, token }: { taskData: Task; token: string },
    { rejectWithValue }
  ) => {
    try {
      console.log(taskData);
      const response = await axiosInstance.post("/tasks", taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (err: any) {
      return rejectWithValue(
        err.response?.data?.message || "Task creation failed"
      );
    }
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setTask: (state, action: PayloadAction<Task | null>) => {
      state.task = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllTasks.fulfilled, (state, action) => {
        state.loading = false;
        // console.log("Fetched tasks:", action.payload.data);
        state.tasks = action.payload.data;
      })
      .addCase(getAllTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
    builder
      .addCase(getTaskByUserId.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTaskByUserId.fulfilled, (state, action) => {
        state.loading = false;
        // console.log("Setting current user:", action.payload);
        state.tasks = action.payload.data;
        console.log(state.tasks[0].assigned_by_user);
      })
      .addCase(getTaskByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setTasks, setLoading, setError, setTask } = tasksSlice.actions;
export default tasksSlice.reducer;
