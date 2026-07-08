import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { DateClickArg } from "@fullcalendar/interaction";

import AddEventModal from "./AddEventModel";
import EventSidebar from "./EventSidebar";
import {
  calendarEvents,
  type CalendarEvent,
} from "../../data/Calendar";

export default function CalendarView() {
  const [events, setEvents] =
    useState<CalendarEvent[]>(calendarEvents);

  const [open, setOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (info: DateClickArg) => {
    setSelectedDate(info.dateStr);
    setOpen(true);
  };

  const addEvent = (event: CalendarEvent) => {
    setEvents((prev) => [...prev, event]);
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

      <div className="xl:col-span-3 bg-white rounded-2xl shadow-lg p-6">

        <FullCalendar
          plugins={[
            dayGridPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
          height="auto"
        />

      </div>

      <EventSidebar
        events={events}
        onDelete={deleteEvent}
      />

      <AddEventModal
        open={open}
        selectedDate={selectedDate}
        onClose={() => setOpen(false)}
        onAdd={addEvent}
      />

    </div>
  );
}