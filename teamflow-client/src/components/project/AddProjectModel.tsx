import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (project: any) => void;
}

export default function AddProjectModal({
  open,
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

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl w-[500px] p-6">

        <h2 className="text-2xl font-bold mb-6">
          Add Project
        </h2>

        <div className="space-y-4">

          <input
            className="w-full border p-3 rounded-lg"
            placeholder="Project Title"
            value={form.title}
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
          />

          <textarea
            className="w-full border p-3 rounded-lg"
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
          />

          <select
            className="w-full border p-3 rounded-lg"
            value={form.status}
            onChange={(e) =>
              setForm({ ...form, status: e.target.value })
            }
          >
            <option>Planning</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <select
            className="w-full border p-3 rounded-lg"
            value={form.priority}
            onChange={(e) =>
              setForm({ ...form, priority: e.target.value })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <input
            type="date"
            className="w-full border p-3 rounded-lg"
            value={form.dueDate}
            onChange={(e) =>
              setForm({
                ...form,
                dueDate: e.target.value,
              })
            }
          />

        </div>

        <div className="flex justify-end gap-4 mt-6">

          <button
            onClick={onClose}
            className="px-5 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onSave(form);

              setForm({
                title: "",
                description: "",
                status: "Planning",
                priority: "Medium",
                dueDate: "",
              });

              onClose();
            }}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}