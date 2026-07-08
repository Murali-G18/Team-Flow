export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  status: "Online" | "Offline";
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sai Kiran",
    role: "Frontend Developer",
    department: "Engineering",
    email: "sai@gmail.com",
    phone: "+91 9876543210",
    status: "Online",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "2",
    name: "Rahul",
    role: "Backend Developer",
    department: "Engineering",
    email: "rahul@gmail.com",
    phone: "+91 9876543211",
    status: "Offline",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: "3",
    name: "Priya",
    role: "UI/UX Designer",
    department: "Design",
    email: "priya@gmail.com",
    phone: "+91 9876543212",
    status: "Online",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];