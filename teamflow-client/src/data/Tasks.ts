export interface Task {
  id: string;
  title: string;
  project: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  status: "Completed" | "In Progress" | "Pending";
  dueDate: string;
}

export const tasks: Task[] = [
  {
    id: "TSK-101",
    title: "Design Login Page",
    project: "CRM System",
    assignee: "Sai",
    priority: "High",
    status: "Completed",
    dueDate: "2026-07-05",
  },
  {
    id: "TSK-102",
    title: "API Integration",
    project: "Inventory",
    assignee: "Rahul",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2026-07-08",
  },
  {
    id: "TSK-103",
    title: "Fix Dashboard Bugs",
    project: "ERP",
    assignee: "Kiran",
    priority: "High",
    status: "Pending",
    dueDate: "2026-07-10",
  },
  {
    id: "TSK-104",
    title: "Create Reports",
    project: "Finance",
    assignee: "Anjali",
    priority: "Low",
    status: "Completed",
    dueDate: "2026-07-03",
  },
  {
    id: "TSK-105",
    title: "Testing Module",
    project: "Website",
    assignee: "Priya",
    priority: "Medium",
    status: "In Progress",
    dueDate: "2026-07-12",
  },
  {
    id: "TSK-106",
    title: "Deploy Backend",
    project: "Hospital",
    assignee: "Ravi",
    priority: "High",
    status: "Pending",
    dueDate: "2026-07-15",
  },
];