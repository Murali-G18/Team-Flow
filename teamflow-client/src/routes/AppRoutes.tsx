import { Routes, Route } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import Tasks from "../pages/Tasks";
import Calendar from "../pages/Calendar";
import Notifications from "../pages/Notifications";
import Analytics from "../pages/Analytics";
import RCA from "../pages/RCA";
import Kanban from "../pages/Kanban";
import Settings from "../pages/Settings";
import Team from "../pages/Team";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Workspace from "../pages/Workspace";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import Chat from "../pages/Chat";
import Documents from "../pages/Documents";
import Tickets from "../pages/Tickets";
import RoleRoute from "../components/auth/RoleRoute";
import Unauthorized from "../pages/Unauthorized";
import UserManagement from "../pages/UserManagement";
import ExecutiveDashboard from "../pages/ExecutiveDashboard";
import ExecutiveAnalytics from "../pages/ExecutiveAnalytics";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/workspace" element={<Workspace />} />
      <Route path="/chat" element={<RoleRoute roles={["Admin","Manager","Developer"]}><Chat /></RoleRoute>}/>

<Route
  path="/executive-analytics"
  element={<ExecutiveAnalytics/>}
/>

<Route
  path="/dashboard"
  element={<ExecutiveDashboard />}
/>
<Route
  path="/users"
  element={
    <RoleRoute roles={["Admin"]}>
      <UserManagement />
    </RoleRoute>
  }
/>
        <Route
  path="/projects"
  element={
    <RoleRoute roles={["Admin", "Manager"]}>
      <Projects />
    </RoleRoute>
  }
/>
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/kanban" element={<Kanban />} />

        <Route
  path="/documents"
  element={
    <RoleRoute
      roles={[
        "Admin",
        "Manager",
        "Developer",
      ]}
    >
      <Documents />
    </RoleRoute>
  }
/>
        <Route
  path="/tickets"
  element={
    <RoleRoute roles={["Admin", "Manager"]}>
      <Tickets />
    </RoleRoute>
  }
/>
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/rca" element={<RCA />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team"  element={<RoleRoute roles={["Admin"]}><Team /></RoleRoute>}
/>
      </Route>

    </Routes>
  );
}