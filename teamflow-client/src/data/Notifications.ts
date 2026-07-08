export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "success" | "warning" | "error" | "info";
  read: boolean;
}

export const notificationsData: Notification[] = [
  {
    id: "1",
    title: "Project Approved",
    message: "CRM Management project has been approved.",
    time: "5 mins ago",
    type: "success",
    read: false,
  },
  {
    id: "2",
    title: "Meeting Reminder",
    message: "Sprint planning meeting at 3:00 PM.",
    time: "30 mins ago",
    type: "warning",
    read: false,
  },
  {
    id: "3",
    title: "Server Error",
    message: "Backend API is temporarily unavailable.",
    time: "1 hour ago",
    type: "error",
    read: true,
  },
  {
    id: "4",
    title: "New Task Assigned",
    message: "You have been assigned a new UI task.",
    time: "2 hours ago",
    type: "info",
    read: false,
  },
];