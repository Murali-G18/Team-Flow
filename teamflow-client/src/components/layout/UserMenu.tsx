import {
  Bell,
  Moon,
  UserCircle,
} from "lucide-react";

export default function UserMenu() {
  return (
    <div className="flex items-center gap-6">

      <Bell className="cursor-pointer" />

      <Moon className="cursor-pointer" />

      <UserCircle
        size={36}
        className="cursor-pointer"
      />

    </div>
  );
}