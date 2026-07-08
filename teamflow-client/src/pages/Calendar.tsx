import CalendarView from "../components/calendar/CalendarView";

export default function Calendar() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto">
      <div>
        <h1 className="text-4xl font-bold">
          Calendar
        </h1>

        <p className="text-slate-500 mt-2">
          Manage meetings, deadlines and events.
        </p>
      </div>

      <CalendarView />
    </div>
  );
}