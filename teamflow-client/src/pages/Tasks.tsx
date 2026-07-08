import  { tasks } from "../data/Tasks";
import TaskTable from "../components/project/TaskTable";

export default function Tasks() {
  const completed = tasks.filter(
    (t) => t.status === "Completed"
  ).length;

  const progress = tasks.filter(
    (t) => t.status === "In Progress"
  ).length;

  const pending = tasks.filter(
    (t) => t.status === "Pending"
  ).length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Tasks
          </h1>

          <p className="text-slate-500">
            Manage project tasks
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Task
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-slate-500">
            Completed
          </h3>

          <p className="text-3xl font-bold mt-2">
            {completed}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-slate-500">
            In Progress
          </h3>

          <p className="text-3xl font-bold mt-2">
            {progress}
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-slate-500">
            Pending
          </h3>

          <p className="text-3xl font-bold mt-2">
            {pending}
          </p>
        </div>

      </div>

      <TaskTable tasks={tasks} />

    </div>
  );
}