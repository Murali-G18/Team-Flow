import KanbanBoard from "../components/kanbans/KanbanBoard";

export default function Kanban() {
  return (
    <div className="space-y-8 max-w-screen-2xl mx-auto">

      <div>

        <h1 className="text-4xl font-bold">
          Kanban Board
        </h1>

        <p className="text-slate-500 mt-2">
          Drag and drop tasks across workflow stages.
        </p>

      </div>

      <KanbanBoard />

    </div>
  );
}