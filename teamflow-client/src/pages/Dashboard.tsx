import DashboardCards from "../components/dashboard/DashboardCards";
import ProductivityChart from "../components/dashboard/ProductivityChart";
import StatusChart from "../components/dashboard/StatusChart";
import RecentTasks from "../components/dashboard/RecentTasks";
import TeamActivity from "../components/dashboard/TeamActivity";

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">

        <DashboardCards />

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <ProductivityChart />

            <StatusChart />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

            <RecentTasks />

            <TeamActivity />

        </div>

    </div>
);
}