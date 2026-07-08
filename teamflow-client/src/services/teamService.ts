import api from "./api";

// ==========================
// Get All Team Members
// ==========================
export const getTeam = async () => {
  const res = await api.get("/team");
  return res.data;
};

// ==========================
// Get Single Team Member
// ==========================
export const getTeamMember = async (id: string) => {
  const res = await api.get(`/team/${id}`);
  return res.data;
};

// ==========================
// Add Team Member
// ==========================
export const addTeamMember = async (member: any) => {
  const res = await api.post("/team", member);
  return res.data;
};

// ==========================
// Update Team Member
// ==========================
export const updateTeamMember = async (
  id: string,
  member: any
) => {
  const res = await api.put(`/team/${id}`, member);
  return res.data;
};

// ==========================
// Delete Team Member
// ==========================
export const deleteTeamMember = async (id: string) => {
  const res = await api.delete(`/team/${id}`);
  return res.data;
};