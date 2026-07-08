import KPICard from "./KPICard";
import {
  FolderKanban,
  LifeBuoy,
  Users,
  User,
} from "lucide-react";

interface Props {
  stats: any;
}

export default function DashboardCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <KPICard
        title="Projects"
        value={stats?.totalProjects || 0}
        color="bg-blue-500"
        icon={FolderKanban}
      />

      <KPICard
        title="Tickets"
        value={stats?.totalTickets || 0}
        color="bg-red-500"
        icon={LifeBuoy}
      />

      <KPICard
        title="Members"
        value={stats?.totalMembers || 0}
        color="bg-green-500"
        icon={Users}
      />

      <KPICard
        title="Users"
        value={stats?.totalUsers || 0}
        color="bg-purple-500"
        icon={User}
      />
    </div>
  );
}