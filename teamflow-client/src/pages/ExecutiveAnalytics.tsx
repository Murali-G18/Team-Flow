import { useQuery } from "@tanstack/react-query";
import { getExecutiveAnalytics } from "../services/analyticsService";

export default function ExecutiveAnalytics() {
  const { data, isLoading } = useQuery({
    queryKey: ["executive"],
    queryFn: getExecutiveAnalytics,
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Executive Analytics
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Total Projects</h2>
          <p className="text-5xl font-bold">
            {data.totalProjects}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Completion Rate</h2>
          <p className="text-5xl font-bold">
            {data.projectCompletion}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Resolution Rate</h2>
          <p className="text-5xl font-bold">
            {data.ticketResolution}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2>Productivity</h2>
          <p className="text-5xl font-bold text-green-600">
            {data.productivity}%
          </p>
        </div>

      </div>
    </div>
  );
}