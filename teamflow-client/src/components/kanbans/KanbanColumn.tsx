import {
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import KanbanCard from "./KanbanCard";
import type { KanbanTask } from "../../data/Kanban";

interface Props {
  title: string;
  columnId: string;
  tasks: KanbanTask[];
  onEdit: (task: KanbanTask) => void;
  onDelete: (id: string) => void;
}

export default function KanbanColumn({
  title,
  columnId,
  tasks,
  onEdit,
  onDelete,
}: Props) {
    
  return (
    <div className="bg-slate-100 rounded-2xl p-4 min-h-[600px]">

      <h2 className="font-bold text-xl mb-5">
        {title}
      </h2>

      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4 min-h-[500px]"
          >
            {tasks.map((task, index) => (
              <Draggable
                key={task.id}
                draggableId={task.id}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <KanbanCard
                    task={task}
                    onEdit={onEdit}
                    onDelete={onDelete}
/>
                  </div>
                )}
              </Draggable>
            ))}

            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}