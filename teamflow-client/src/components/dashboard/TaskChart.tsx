import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    priority: "High",
    tasks: 18,
  },
  {
    priority: "Medium",
    tasks: 34,
  },
  {
    priority: "Low",
    tasks: 22,
  },
];

export default function TaskChart() {
  return (
    <div className="bg-white rounded-2xl shadow border p-6">

      <h2 className="text-xl font-bold mb-5">
        Task Priority
      </h2>

      <div className="h-[350px]">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="priority" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="tasks"
              radius={[8, 8, 0, 0]}
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}