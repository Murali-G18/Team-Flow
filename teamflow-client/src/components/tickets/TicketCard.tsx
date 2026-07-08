import { Pencil, Trash2 } from "lucide-react";

export default function TicketCard({
  ticket,
  onEdit,
  onDelete,
}: any) {
  const priorityColor = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Low: "bg-green-100 text-green-700",
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl">

      <div className="flex justify-between">

        <div>

          <h2 className="text-xl font-bold">
            {ticket.title}
          </h2>

          <p className="text-gray-500 mt-2">
            {ticket.description}
          </p>

        </div>

        <div className="flex gap-2">

          <button onClick={() => onEdit(ticket)}>
            <Pencil className="text-blue-600" />
          </button>

          <button onClick={() => onDelete(ticket._id)}>
            <Trash2 className="text-red-600" />
          </button>

        </div>

      </div>

      <div className="flex justify-between mt-5">

        <span
          className={`px-3 py-1 rounded-full text-sm ${
            priorityColor[
              ticket.priority as keyof typeof priorityColor
            ]
          }`}
        >
          {ticket.priority}
        </span>

        <span>{ticket.status}</span>

      </div>

      <p className="mt-4 text-gray-600">
        Assigned: {ticket.assignedTo}
      </p>

    </div>
  );
}