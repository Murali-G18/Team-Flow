import api from "./api";

export const getMessages = async () => {
  const res = await api.get("/messages");
  return res.data;
};

export const saveMessage = async (message: any) => {
  const res = await api.post("/messages", message);
  return res.data;
};