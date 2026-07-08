import TicketCard from "./TicketCard";
import type { Ticket } from "../../data/Tickets";

interface Props {
  tickets: Ticket[];
  onDelete: (id: string) => void;
}

export default function TicketList({
  tickets,
  onDelete,
}: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">

      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}