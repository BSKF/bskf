// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/slices/authSlice";
import usersReducer from "@/slices/users";
import tasksReducer from "@/slices/tasks";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
