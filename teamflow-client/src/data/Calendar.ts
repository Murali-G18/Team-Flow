export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  color: string;
}

export const calendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Sprint Planning",
    date: "2026-07-06",
    color: "#2563eb",
  },
  {
    id: "2",
    title: "Client Meeting",
    date: "2026-07-08",
    color: "#16a34a",
  },
  {
    id: "3",
    title: "Project Demo",
    date: "2026-07-15",
    color: "#dc2626",
  },
];