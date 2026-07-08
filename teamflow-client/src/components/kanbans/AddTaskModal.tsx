import { useState } from "react";
import type { KanbanTask } from "../../data/Kanban";
interface Props {
  open: boolean;
  onClose: () => void;
  onAdd: (task: KanbanTask) => void;
}

export default function AddTaskModal({
  open,
  onClose,
  onAdd,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [priority, setPriority] =
    useState<"High" | "Medium" | "Low">("Medium");

  if (!open) return null;

  const createTask = () => {
    if (!title.trim()) return;

    onAdd({
      id: Date.now().toString(),
      title,
      description,
      assignee,
      priority,
      status: "todo",
    });

    setTitle("");
    setDescription("");
    setAssignee("");
    setPriority("Medium");

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-6">
          Create Task
        </h2>

        <div className="space-y-4">

          <input
            placeholder="Task Title"
            className="w-full border rounded-lg p-3"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            rows={4}
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />

          <input
            placeholder="Assignee"
            className="w-full border rounded-lg p-3"
            value={assignee}
            onChange={(e)=>setAssignee(e.target.value)}
          />

          <select
            className="w-full border rounded-lg p-3"
            value={priority}
            onChange={(e)=>
              setPriority(e.target.value as any)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <div className="flex justify-end gap-3">

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              onClick={createTask}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Create
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}