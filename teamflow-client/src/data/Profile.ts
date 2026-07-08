export interface UserProfile {
  name: string;
  email: string;
  role: string;
  department: string;
  location: string;
  phone: string;
  avatar: string;
}

export const profile: UserProfile = {
  name: "Sai Kiran",
  email: "saikiran@gmail.com",
  role: "Frontend Developer",
  department: "Engineering",
  location: "Hyderabad",
  phone: "+91 9876543210",
  avatar:
    "https://i.pravatar.cc/300?img=12",
};