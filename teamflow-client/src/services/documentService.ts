import api from "./api";

export const getDocuments = async () => {
  const res = await api.get("/documents");
  return res.data;
};

export const uploadDocument = async (
  file: File
) => {
  const formData = new FormData();

  formData.append("file", file);

  const res = await api.post(
    "/documents/upload",
    formData,
    {
      headers: {
        "Content-Type":
          "multipart/form-data",
      },
    }
  );

  return res.data;
};

export const deleteDocument = async (
  id: string
) => {
  const res = await api.delete(
    `/documents/${id}`
  );

  return res.data;
};