import {
  FolderKanban,
  CheckCircle,
  Clock3,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function Dashboard() {
  return (
    <div>

      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2">
        Welcome back! Here's what's happening today.
      </p>

      <div className="grid gap-6 mt-10 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Projects"
          value="24"
          icon={FolderKanban}
        />

        <StatCard
          title="Completed"
          value="189"
          icon={CheckCircle}
        />

        <StatCard
          title="Pending"
          value="17"
          icon={Clock3}
        />

        <StatCard
          title="Team Members"
          value="12"
          icon={Users}
        />

      </div>

    </div>
  );
}