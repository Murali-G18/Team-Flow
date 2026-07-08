import { Pencil, Trash2 } from "lucide-react";
import type { KanbanTask } from "../../data/Kanban";

interface Props {
  task: KanbanTask;
  onEdit: (task: KanbanTask) => void;
  onDelete: (id: string) => void;
}

export default function KanbanCard({
  task,
  onEdit,
  onDelete,
}: Props) {
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div
  className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-grab active:cursor-grabbing"
  style={{ userSelect: "none" }}
>

      <div className="flex justify-between items-start">

        <h3 className="font-semibold">
          {task.title}
        </h3>

        <div className="flex gap-2">

          <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-800"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(task.id)}
            className="text-red-600 hover:text-red-800"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

      <p className="text-slate-500 text-sm mt-3">
        {task.description}
      </p>

      <div className="flex justify-between mt-5">

        <span
          className={`px-2 py-1 rounded-full text-xs ${priorityColor[task.priority]}`}
        >
          {task.priority}
        </span>

        <span className="text-sm">
          👤 {task.assignee}
        </span>

      </div>

    </div>
  );
}