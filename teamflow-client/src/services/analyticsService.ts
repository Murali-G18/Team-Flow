import api from "./api";

export const getExecutiveAnalytics = async () => {
  const res = await api.get("/analytics");
  return res.data;
};