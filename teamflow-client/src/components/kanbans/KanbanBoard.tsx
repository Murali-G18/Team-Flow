import { useState } from "react";
import {
  DragDropContext,
  type DropResult,
} from "@hello-pangea/dnd";

import KanbanColumn from "./KanbanColumn";
import AddTaskModal from "./AddTaskModal";
import {
  kanbanTasks,
  type KanbanTask,
} from "../../data/Kanban";

export default function KanbanBoard() {
    const deleteTask = (id: string) => {
  setTasks((prev) => prev.filter((task) => task.id !== id));
};

const editTask = (task: KanbanTask) => {
  const title = prompt("Edit Task Title", task.title);

  if (!title) return;

  setTasks((prev) =>
    prev.map((t) =>
      t.id === task.id
        ? {
            ...t,
            title,
          }
        : t
    )
  );
};
  const [tasks, setTasks] =
    useState<KanbanTask[]>(kanbanTasks);

  const [open, setOpen] = useState(false);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === result.draggableId
          ? {
              ...task,
              status: result.destination!.droppableId as KanbanTask["status"],
            }
          : task
      )
    );
  };

  const addTask = (task: KanbanTask) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          + Add Task
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <KanbanColumn
  title="To Do"
  columnId="todo"
  tasks={tasks.filter((t) => t.status === "todo")}
  onEdit={editTask}
  onDelete={deleteTask}
/>

<KanbanColumn
  title="In Progress"
  columnId="progress"
  tasks={tasks.filter((t) => t.status === "progress")}
  onEdit={editTask}
  onDelete={deleteTask}
/>

<KanbanColumn
  title="Review"
  columnId="review"
  tasks={tasks.filter((t) => t.status === "review")}
  onEdit={editTask}
  onDelete={deleteTask}
/>

<KanbanColumn
  title="Done"
  columnId="done"
  tasks={tasks.filter((t) => t.status === "done")}
  onEdit={editTask}
  onDelete={deleteTask}
/>
        </div>
      </DragDropContext>

      <AddTaskModal
        open={open}
        onClose={() => setOpen(false)}
        onAdd={addTask}
      />
    </>
  );
}