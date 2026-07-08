import DashboardCards from "../../components/dashboard/DashboardCards";
import ProductivityChart from "../../components/dashboard/ProductivityChart";
import StatusChart from "../../components/dashboard/StatusChart";
import RecentTasks from "../../components/dashboard/RecentTasks";
import TeamActivity from "../../components/dashboard/TeamActivity";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Welcome back 👋
        </p>

      </div>

      <DashboardCards />

      <div className="grid gap-6 xl:grid-cols-2">

        <ProductivityChart />

        <StatusChart />

      </div>

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="xl:col-span-2">
          <RecentTasks />
        </div>

        <TeamActivity />

      </div>

    </div>
  );
}