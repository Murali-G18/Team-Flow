import { Search, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  // Get logged in user
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  navigate("/login");
};

  return (
    <header className="bg-white shadow-sm border-b px-8 py-4">
      <div className="flex items-center justify-between">

        {/* Search */}
        <div className="relative w-96">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search projects or tasks..."
            className="w-full pl-10 pr-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Notifications */}
          <button className="relative">
            <Bell
              size={22}
              className="text-gray-600 hover:text-blue-600"
            />
            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          {/* User */}
          <div className="flex items-center gap-3">
            <img
              src={`https://ui-avatars.com/api/?name=${
                user.name || "User"
              }&background=2563eb&color=fff`}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                {user.name || "Guest"}
              </h3>

              <p className="text-xs text-gray-500">
                {user.role || "Developer"}
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}