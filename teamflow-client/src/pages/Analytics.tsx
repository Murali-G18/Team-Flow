import KPICards from "../components/analytics/KPICards";
import LineChartCard from "../components/analytics/LineChartCard";
import PieChartCard from "../components/analytics/PieChartCard";
import BarChartCard from "../components/analytics/BarChartCard";

export default function Analytics() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-500 mt-2">
          Monitor your projects and team performance.
        </p>

      </div>

      <KPICards />

      <div className="grid lg:grid-cols-2 gap-6">

        <LineChartCard />

        <PieChartCard />

      </div>

      <BarChartCard />

    </div>
  );
}