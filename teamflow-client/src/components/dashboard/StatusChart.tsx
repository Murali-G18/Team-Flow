import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import Card from "../ui/Card";

const data = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 20 },
    { name: "Review", value: 10 },
];

const COLORS = [
    "#22C55E",
    "#F59E0B",
    "#2563EB",
];

export default function StatusChart() {

    return (

        <Card>

            <h2 className="text-xl font-semibold mb-5">

                Task Status

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        outerRadius={90}
                    >

                        {data.map((_, index) => (

                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </Card>

    );

}