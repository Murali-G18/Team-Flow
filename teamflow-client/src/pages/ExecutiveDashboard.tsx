import { useQuery } from "@tanstack/react-query";

import DashboardCards from "../components/dashboard/DashboardCards";
import ProjectChart from "../components/dashboard/ProjectChart";
import TaskChart from "../components/dashboard/TaskChart";
import TicketChart from "../components/dashboard/TicketChart";
import ActivityChart from "../components/dashboard/ActivityChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import UpcomingDeadlines from "../components/dashboard/UpcommingDeadlines";
import QuickActions from "../components/dashboard/QuickActions";

import { getDashboardStats } from "../services/dashboardService";

export default function ExecutiveDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard"],
    queryFn: getDashboardStats,
  });

  if (isLoading) {
    return (
      <div className="p-8 text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <DashboardCards stats={data} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectChart stats={data} />
        <TaskChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketChart stats={data} />
        <ActivityChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentActivity />
        <UpcomingDeadlines />
        <QuickActions />
      </div>

    </div>
  );
}