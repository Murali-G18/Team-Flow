import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { barData } from "../../data/Analytics";

export default function BarChartCard() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Bugs by Project
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >

        <BarChart data={barData}>

          <XAxis dataKey="project" />

          <Tooltip />

          <Bar
            dataKey="bugs"
            fill="#2563eb"
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}