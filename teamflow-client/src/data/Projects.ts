export interface Project {
  id: number;
  name: string;
  description: string;
  team: string;
  status: "Active" | "Completed" | "On Hold";
  priority: "High" | "Medium" | "Low";
  progress: number;
  dueDate: string;
  members: number;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Website Redesign",
    description: "Modernize the company website.",
    team: "Frontend Team",
    status: "Active",
    priority: "High",
    progress: 80,
    dueDate: "20 Jul 2026",
    members: 5,
  },
  {
    id: 2,
    name: "HR Portal",
    description: "Employee management system.",
    team: "HR Team",
    status: "Completed",
    priority: "Medium",
    progress: 100,
    dueDate: "10 Jun 2026",
    members: 4,
  },
  {
    id: 3,
    name: "AI Chatbot",
    description: "Internal AI support assistant.",
    team: "AI Team",
    status: "On Hold",
    priority: "High",
    progress: 45,
    dueDate: "05 Aug 2026",
    members: 6,
  },
];