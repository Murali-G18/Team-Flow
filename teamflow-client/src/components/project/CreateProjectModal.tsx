import { X } from "lucide-react";
import Button from "../ui/Button";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CreateProjectModal({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            Create New Project
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-4">

          <input
            className="w-full border rounded-lg p-3"
            placeholder="Project Name"
          />

          <textarea
            className="w-full border rounded-lg p-3"
            rows={4}
            placeholder="Description"
          />

          <input
            type="date"
            className="w-full border rounded-lg p-3"
          />

          <select className="w-full border rounded-lg p-3">
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <Button className="w-full">
            Create Project
          </Button>

        </div>
      </div>
    </div>
  );
}