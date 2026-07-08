import { Workflow } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-blue-600 p-2 text-white">
        <Workflow size={24} />
      </div>

      <div>
        <h1 className="text-xl font-bold text-blue-600">
          TeamFlow
        </h1>

        <p className="text-xs text-gray-500">
          Enterprise Platform
        </p>
      </div>
    </div>
  );
}