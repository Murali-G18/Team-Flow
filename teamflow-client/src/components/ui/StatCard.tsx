import Card from "./Card";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <Card className="flex items-center justify-between">

      <div>

        <p className="text-gray-500">
          {title}
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          {value}
        </h2>

      </div>

      <div className="rounded-xl bg-blue-100 p-4">

        <Icon
          className="text-blue-600"
          size={30}
        />

      </div>

    </Card>
  );
}