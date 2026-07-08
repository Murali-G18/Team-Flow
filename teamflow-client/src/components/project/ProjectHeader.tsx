import { Plus } from "lucide-react";
import Button from "../ui/Button";

interface Props {
  onCreate: () => void;
}

export default function ProjectHeader({ onCreate }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Projects
        </h1>

        <p className="text-slate-500 mt-1">
          Manage all company projects
        </p>
      </div>

      <Button
        onClick={onCreate}
        className="flex items-center gap-2"
      >
        <Plus size={18} />
        New Project
      </Button>

    </div>
  );
}