import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color: string;
}

export default function KPICard({
  title,
  value,
  icon: Icon,
  color,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6 hover:shadow-xl transition">

      <div className="flex justify-between items-center">

        <div>

          <p className="text-gray-500 text-sm">
            {title}
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {value}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${color}`}
        >
          <Icon size={30} className="text-white" />
        </div>

      </div>

    </div>
  );
}