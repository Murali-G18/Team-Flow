export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  assignee: string;
  priority: "High" | "Medium" | "Low";
  status: "todo" | "progress" | "review" | "done";
}

export const kanbanTasks: KanbanTask[] = [
  {
    id: "1",
    title: "Design Login Page",
    description: "Create responsive login UI",
    assignee: "Sai",
    priority: "High",
    status: "todo",
  },
  {
    id: "2",
    title: "API Integration",
    description: "Connect frontend with backend",
    assignee: "Rahul",
    priority: "Medium",
    status: "progress",
  },
  {
    id: "3",
    title: "Testing",
    description: "Unit testing",
    assignee: "Kiran",
    priority: "Low",
    status: "review",
  },
  {
    id: "4",
    title: "Deploy",
    description: "Deploy to Vercel",
    assignee: "Priya",
    priority: "High",
    status: "done",
  },
];