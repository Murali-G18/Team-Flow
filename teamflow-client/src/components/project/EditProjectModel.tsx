import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  project: any;
  onClose: () => void;
  onSave: (project: any) => void;
}

export default function EditProjectModal({
  open,
  project,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "Planning",
    priority: "Medium",
    dueDate: "",
  });

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title,
        description: project.description,
        status: project.status,
        priority: project.priority,
        dueDate: project.dueDate?.split("T")[0] || "",
      });
    }
  }, [project]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] rounded-xl p-6">

        <h2 className="text-2xl font-bold mb-6">
          Edit Project
        </h2>

        <div className="space-y-4">

          <input
            className="border p-3 rounded-lg w-full"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="border p-3 rounded-lg w-full"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <select
            className="border p-3 rounded-lg w-full"
            value={form.status}
            onChange={(e) =>
              setForm({
                ...form,
                status: e.target.value,
              })
            }
          >
            <option>Planning</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select
            className="border p-3 rounded-lg w-full"
            value={form.priority}
            onChange={(e) =>
              setForm({
                ...form,
                priority: e.target.value,
              })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            className="border p-3 rounded-lg w-full"
            value={form.dueDate}
            onChange={(e) =>
              setForm({
                ...form,
                dueDate: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(form);
              onClose();
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Save Changes
          </button>

        </div>

      </div>
    </div>
  );
}