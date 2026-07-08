import api from "./api";

// ===============================
// Get All Users
// ===============================
export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

// ===============================
// Get Single User
// ===============================
export const getUser = async (id: string) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// ===============================
// Update User Role
// ===============================
export const updateRole = async (
  id: string,
  role: string
) => {
  const res = await api.put(`/users/${id}`, {
    role,
  });

  return res.data;
};

// ===============================
// Update User Profile
// ===============================
export const updateUser = async (
  id: string,
  userData: any
) => {
  const res = await api.put(
    `/users/${id}`,
    userData
  );

  return res.data;
};

// ===============================
// Delete User
// ===============================
export const deleteUser = async (
  id: string
) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};