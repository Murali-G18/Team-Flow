export interface ChatMessageType {
  id: string;
  sender: string;
  message: string;
  time: string;
}

export const initialMessages: ChatMessageType[] = [
  {
    id: "1",
    sender: "Sai",
    message: "Good morning team 👋",
    time: "09:00 AM",
  },
  {
    id: "2",
    sender: "Rahul",
    message: "API integration is completed.",
    time: "09:15 AM",
  },
  {
    id: "3",
    sender: "Priya",
    message: "Dashboard UI has been updated.",
    time: "09:30 AM",
  },
];