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
  "#ef4444",
  "#22c55e",
];

export default function TicketChart({ stats }: Props) {
  const data = [
    {
      name: "Open",
      value: stats?.openTickets || 0,
    },
    {
      name: "Resolved",
      value: stats?.resolvedTickets || 0,
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow border p-6">
      <h2 className="text-xl font-bold mb-5">
        Ticket Status
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