import EventCard from "./EventCard";
import type { CalendarEvent } from "../../data/Calendar";

interface Props {
  events: CalendarEvent[];
  onDelete: (id: string) => void;
}

export default function EventSidebar({
  events,
  onDelete,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-xl font-bold mb-5">
        Upcoming Events
      </h2>

      <div className="space-y-4">

        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            onDelete={onDelete}
          />
        ))}

      </div>

    </div>
  );
}