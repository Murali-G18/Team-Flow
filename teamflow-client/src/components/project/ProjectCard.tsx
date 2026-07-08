import { Calendar, Users } from "lucide-react";
import Card from "../ui/Card";
import type { Project } from "../../data/Projects";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const statusColor = {
    Active: "bg-green-100 text-green-700",
    Completed: "bg-blue-100 text-blue-700",
    "On Hold": "bg-red-100 text-red-700",
  };

  const priorityColor = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">{project.name}</h2>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${priorityColor[project.priority]}`}
        >
          {project.priority}
        </span>
      </div>

      <p className="text-slate-500 mt-2">
        {project.description}
      </p>

      <p className="text-sm mt-3 font-medium text-blue-600">
        {project.team}
      </p>

      <div className="mt-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Progress</span>
          <span>{project.progress}%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-blue-600"
            style={{ width: `${project.progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor[project.status]}`}
        >
          {project.status}
        </span>

        <div className="flex items-center gap-1 text-slate-500 text-sm">
          <Calendar size={16} />
          {project.dueDate}
        </div>
      </div>

      <div className="flex items-center gap-2 mt-5 text-slate-500">
        <Users size={18} />
        <span>{project.members} Members</span>
      </div>
    </Card>
  );
}