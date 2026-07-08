export interface Ticket {
  id: string;
  title: string;
  priority: "Low" | "Medium" | "High" | "Critical";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
}

export const initialTickets: Ticket[] = [
  {
    id: "1",
    title: "Login page not working",
    priority: "High",
    status: "Open",
    assignee: "Sai",
  },
  {
    id: "2",
    title: "Database backup failed",
    priority: "Critical",
    status: "In Progress",
    assignee: "Rahul",
  },
  {
    id: "3",
    title: "Dashboard UI issue",
    priority: "Low",
    status: "Resolved",
    assignee: "Priya",
  },
];