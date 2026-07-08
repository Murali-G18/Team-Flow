import api from "./api";


export const getProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};

export const createProject = async (project: any) => {
  const res = await api.post("/projects", project);
  return res.data;
};

export const updateProject = async (
  id: string,
  project: any
) => {
  const res = await api.put(
    `/projects/${id}`,
    project
  );

  return res.data;
};

export const deleteProject = async (id: string) => {
  const res = await api.delete(`/projects/${id}`);
  return res.data;
};

