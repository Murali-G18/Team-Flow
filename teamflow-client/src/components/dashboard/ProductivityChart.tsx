import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

import Card from "../ui/Card";

const data = [
    { day: "Mon", value: 22 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 28 },
    { day: "Thu", value: 48 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 42 },
];

export default function ProductivityChart() {

    return (

        <Card>

            <h2 className="text-xl font-semibold mb-5">

                Productivity

            </h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#2563EB"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </Card>

    );

}