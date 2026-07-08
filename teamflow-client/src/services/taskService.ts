import api from "./api";

// ==========================
// Get All Tasks
// ==========================
export const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

// ==========================
// Get Single Task
// ==========================
export const getTask = async (id: string) => {
  const res = await api.get(`/tasks/${id}`);
  return res.data;
};

// ==========================
// Create Task
// ==========================
export const createTask = async (task: any) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

// ==========================
// Update Task
// ==========================
export const updateTask = async (
  id: string,
  task: any
) => {
  const res = await api.put(`/tasks/${id}`, task);
  return res.data;
};

// ==========================
// Delete Task
// ==========================
export const deleteTask = async (id: string) => {
  const res = await api.delete(`/tasks/${id}`);
  return res.data;
};