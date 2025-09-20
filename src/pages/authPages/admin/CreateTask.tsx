import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/slices/store/store";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { createTask, getAllTasks } from "@/slices/tasks";
import { getUsers } from "@/slices/users";

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

interface Task {
  task_id?: string | null;
  title: string;
  content: string;
  deadline: string;
  assigned_by: string | null;
  assigned_to: string;
  created_at?: string | null;
  updated_at?: string | null;
  is_complete?: boolean | null
}

const CreateTask: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.auth.currentUser);
  const { users } = useSelector((state: RootState) => state.users);
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();

  const [form, setForm] = useState<Task>({
    title: "",
    content: "",
    deadline: "",
    assigned_to: "",
    assigned_by: currentUser.user_id,
  });
  const [editingId, setEditingId] = useState<string | null>(null);

  // Fetch tasks (simulate API)
  useEffect(() => {
    const fetchTask = async () => {
      await dispatch(getUsers());
      await dispatch(getAllTasks());
    };
    fetchTask();
  }, []);

  const formatForDateTimeLocal = (iso: string) => {
    const d = new Date(iso);
    const pad = (n: number) => n.toString().padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(
      d.getHours()
    )}:${pad(d.getMinutes())}`;
  };

  // Save tasks to storage (simulate backend)
  const saveTasks = (updated: Task) => {
    dispatch(createTask({ taskData: updated, token: localStorage.getItem("token") }))
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!form.title || !form.content || !form.deadline || !form.assigned_to) {
      alert("Please fill all fields");
      return;
    }

    if (editingId) {
      // update
      const updated = tasks.map(t =>
        t.task_id === editingId
          ? { ...t, ...form, assigned_by: currentUser.user_id }
          : t
      );
      // saveTasks(updated);
      alert("Task updated!");
    } else {
      // create new
      const newTask: Task = {
        ...form,
        assigned_by: currentUser.user_id,
      };
      saveTasks(newTask);
      alert("Task created!");
    }
    resetForm();
  };

  const resetForm = () => {
    setForm({ title: "", content: "", deadline: "", assigned_to: "", assigned_by: currentUser.user_id });
    setEditingId(null);
  };

  const handleTaskClick = (task: Task) => {
    setForm({
      title: task.title,
      content: task.content,
      deadline: task.deadline,
      assigned_to: task.assigned_to,
      assigned_by: currentUser.user_id
    });
    setEditingId(task.task_id);
  };

  const tasksByMe = tasks.filter(t => t.assigned_by === currentUser.user_id);

  return (
    <div className="flex h-screen">
      {/* Left panel: All tasks */}
      <div className="w-1/3 border-r overflow-y-auto p-4">
        <h2 className="font-semibold text-lg mb-3">📌 All Tasks</h2>
        {tasks.length === 0 && <p className="text-gray-500">No tasks yet</p>}
        {tasks.map(t => (
          <div
            key={t.task_id}
            className={`p-3 rounded mb-2 hover:bg-gray-100 ${editingId === t.task_id ? "bg-gray-200" : ""
              }`}
          >
            <p className="font-semibold">{t.title}</p>
            <p className="text-sm text-gray-600">
              Deadline: {new Date(t.deadline).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Right panel: Form + My tasks */}
      <div className="flex-1 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">{editingId ? "Edit Task" : "Create Task"}</h2>

        <div className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <textarea
            name="content"
            placeholder="Content"
            value={form.content}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            rows={3}
          />
          <input
            type="datetime-local"
            name="deadline"
            value={form.deadline}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <select
            name="assigned_to"
            value={form.assigned_to}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">-- Select user --</option>
            {users
              .filter((u: User) => u.user_id !== currentUser.user_id)
              .map((u: User) => (
                <option key={u.user_id} value={u.user_id}>
                  {u.firstname} {u.lastname} ({u.username})
                </option>
              ))}
          </select>

          <div className="flex gap-4">
            <Button onClick={handleSubmit}>{editingId ? "Update" : "Save"}</Button>
            {editingId && (
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
            )}
          </div>
        </div>

        {/* My tasks */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">📝 Tasks Assigned by Me</h3>
          {tasksByMe.length === 0 && <p className="text-gray-500">No tasks assigned yet</p>}
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {tasksByMe.map(t => (
              <div
                key={t.task_id}
                onClick={() => handleTaskClick(t)}
                className="p-3 border rounded hover:bg-gray-100 cursor-pointer"
              >
                <p className="font-semibold">{t.title}</p>
                <p className="text-sm text-gray-600">
                  Deadline: {new Date(t.deadline).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
