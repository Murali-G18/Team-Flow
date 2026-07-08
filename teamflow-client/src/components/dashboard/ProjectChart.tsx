import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  stats: any;
}

const COLORS = [
  "#3b82f6", // Planning
  "#f59e0b", // In Progress
  "#22c55e", // Completed
];

export default function ProjectChart({ stats }: Props) {
  const data = [
    {
      name: "Planning",
      value: stats?.planningProjects || 0,
    },
    {
      name: "In Progress",
      value: stats?.inProgressProjects || 0,
    },
    {
      name: "Completed",
      value: stats?.completedProjects || 0,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow border p-6">
      <h2 className="text-xl font-bold mb-5">
        Project Status
      </h2>

      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={120}
              innerRadius={60}
              paddingAngle={5}
              label
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}