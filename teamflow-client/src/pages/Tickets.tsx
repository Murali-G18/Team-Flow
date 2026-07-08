import { useState } from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  Plus,
  Search,
  Ticket,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

import TicketCard from "../components/tickets/TicketCard";
import AddTicketModal from "../components/tickets/AddTicketModal";
import EditTicketModal from "../components/tickets/EditTicketModal";

import {
  getTickets,
  addTicket,
  updateTicket,
  deleteTicket,
} from "../services/ticketService";

export default function Tickets() {
  const queryClient = useQueryClient();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any>(null);

  const { data: tickets = [] } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  const createMutation = useMutation({
    mutationFn: addTicket,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });

  const updateMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: any;
    }) => updateTicket(id, data),

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTicket,

    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["tickets"],
      }),
  });

  const filteredTickets = tickets.filter((ticket: any) =>
    ticket.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const openCount = tickets.filter(
    (t: any) => t.status === "Open"
  ).length;

  const progressCount = tickets.filter(
    (t: any) => t.status === "In Progress"
  ).length;

  const resolvedCount = tickets.filter(
    (t: any) => t.status === "Resolved"
  ).length;

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <h1 className="text-4xl font-bold">
            Help Desk
          </h1>

          <p className="text-gray-500">
            Ticket Management System
          </p>

        </div>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <Plus size={18} />
          New Ticket
        </button>

      </div>

      {/* Statistics */}

      <div className="grid md:grid-cols-4 gap-5">

        <div className="bg-white rounded-xl shadow p-5">

          <Ticket className="text-blue-600" />

          <h2 className="text-3xl font-bold mt-2">
            {tickets.length}
          </h2>

          <p>Total Tickets</p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <Clock className="text-yellow-600" />

          <h2 className="text-3xl font-bold mt-2">
            {openCount}
          </h2>

          <p>Open</p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <AlertTriangle className="text-orange-600" />

          <h2 className="text-3xl font-bold mt-2">
            {progressCount}
          </h2>

          <p>In Progress</p>

        </div>

        <div className="bg-white rounded-xl shadow p-5">

          <CheckCircle className="text-green-600" />

          <h2 className="text-3xl font-bold mt-2">
            {resolvedCount}
          </h2>

          <p>Resolved</p>

        </div>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search tickets..."
          className="w-full border rounded-xl pl-10 py-3"
        />

      </div>

      {/* Tickets */}

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">

        {filteredTickets.map((ticket: any) => (

          <TicketCard
            key={ticket._id}
            ticket={ticket}
            onEdit={(ticket: any) => {
              setSelectedTicket(ticket);
              setEditOpen(true);
            }}
            onDelete={(id: string) => {
              if (
                window.confirm(
                  "Delete this ticket?"
                )
              ) {
                deleteMutation.mutate(id);
              }
            }}
          />

        ))}

      </div>

      {/* Add */}

      <AddTicketModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={(ticket) =>
          createMutation.mutate(ticket)
        }
      />

      {/* Edit */}

      <EditTicketModal
        open={editOpen}
        ticket={selectedTicket}
        onClose={() => setEditOpen(false)}
        onSave={(data) =>
          updateMutation.mutate({
            id: selectedTicket._id,
            data,
          })
        }
      />

    </div>
  );
}