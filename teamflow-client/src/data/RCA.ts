export interface RCAIncident {
  id: string;
  title: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved";
  engineer: string;
  rootCause: string;
  resolution: string;
}

export const incidents: RCAIncident[] = [
  {
    id: "INC001",
    title: "Login API Failure",
    priority: "High",
    status: "Open",
    engineer: "Sai",
    rootCause: "JWT token validation failed.",
    resolution: "Pending investigation.",
  },
  {
    id: "INC002",
    title: "Database Timeout",
    priority: "Medium",
    status: "In Progress",
    engineer: "Rahul",
    rootCause: "Slow SQL query.",
    resolution: "Optimizing indexes.",
  },
  {
    id: "INC003",
    title: "Payment Gateway Error",
    priority: "Low",
    status: "Resolved",
    engineer: "Priya",
    rootCause: "Expired API key.",
    resolution: "API key updated successfully.",
  },
];