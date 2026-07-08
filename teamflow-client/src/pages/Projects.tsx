import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { Trash2, Plus, Pencil } from "lucide-react";

import {
  getProjects,
  createProject,
  deleteProject,
  updateProject,
} from "../services/projectService";

import AddProjectModal from "../components/project/AddProjectModel";
import EditProjectModal from "../components/project/EditProjectModel";

export default function Projects() {
  const queryClient = useQueryClient();

  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Fetch Projects
  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  // Create
  const createMutation = useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });

  // Delete
  const deleteMutation = useMutation({
    mutationFn: deleteProject,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });

  // Update
  const updateMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) => updateProject(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects"],
      });
    },
  });

  if (isLoading) {
    return (
      <div className="text-center text-xl font-semibold">
        Loading Projects...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Projects
          </h1>

          <p className="text-gray-500">
            Manage all your projects
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700"
        >
          <Plus size={20} />
          New Project
        </button>

      </div>

      {/* Projects */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {projects.map((project: any) => (

          <div
            key={project._id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
          >

            <div className="flex justify-between">

              <h2 className="text-2xl font-bold">
                {project.title}
              </h2>

              <div className="flex gap-3">

                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setEditOpen(true);
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Pencil size={20} />
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this project?"
                      )
                    ) {
                      deleteMutation.mutate(project._id);
                    }
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={20} />
                </button>

              </div>

            </div>

            <p className="text-gray-500 mt-3">
              {project.description}
            </p>

            <div className="flex justify-between mt-6">

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {project.status}
              </span>

              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  project.priority === "High"
                    ? "bg-red-100 text-red-700"
                    : project.priority === "Medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}
              >
                {project.priority}
              </span>

            </div>

            <p className="text-sm text-gray-500 mt-5">
              Due:{" "}
              {new Date(project.dueDate).toLocaleDateString()}
            </p>

          </div>

        ))}

      </div>

      {/* Add Modal */}

      <AddProjectModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(data) => createMutation.mutate(data)}
      />

      {/* Edit Modal */}

      <EditProjectModal
        open={editOpen}
        project={selectedProject}
        onClose={() => setEditOpen(false)}
        onSave={(data) =>
          updateMutation.mutate({
            id: selectedProject._id,
            data,
          })
        }
      />

    </div>
  );
}