import {
  Folder,
  CheckCircle,
  Users,
  Clock,
} from "lucide-react";

export default function KPICards() {
  const cards = [
    {
      title: "Projects",
      value: "12",
      icon: Folder,
      color: "bg-blue-500",
    },
    {
      title: "Completed",
      value: "84%",
      icon: CheckCircle,
      color: "bg-green-500",
    },
    {
      title: "Team Members",
      value: "24",
      icon: Users,
      color: "bg-purple-500",
    },
    {
      title: "Hours",
      value: "1420",
      icon: Clock,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="bg-white rounded-2xl shadow p-6 flex justify-between items-center"
          >

            <div>

              <p className="text-slate-500">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.color} p-4 rounded-xl text-white`}
            >
              <Icon size={28} />
            </div>

          </div>

        );
      })}
    </div>
  );
}