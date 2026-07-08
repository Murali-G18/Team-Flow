import { Trash2 } from "lucide-react";
import type { CalendarEvent } from "../../data/Calendar";

interface Props {
  event: CalendarEvent;
  onDelete: (id: string) => void;
}

export default function EventCard({
  event,
  onDelete,
}: Props) {
  return (
    <div
      className="rounded-xl p-4 text-white"
      style={{ backgroundColor: event.color }}
    >
      <div className="flex justify-between items-center">

        <div>

          <h3 className="font-semibold">
            {event.title}
          </h3>

          <p className="text-sm opacity-90">
            {event.date}
          </p>

        </div>

        <button
          onClick={() => onDelete(event.id)}
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  );
}