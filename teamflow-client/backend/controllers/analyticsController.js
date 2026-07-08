import Project from "../models/Project.js";
import Ticket from "../models/Ticket.js";
import User from "../models/User.js";
import Team from "../models/Team.js";

export const executiveAnalytics = async (req, res) => {
  try {
    const [
      totalProjects,
      completedProjects,
      totalTickets,
      resolvedTickets,
      totalUsers,
      totalTeams,
    ] = await Promise.all([
      Project.countDocuments(),
      Project.countDocuments({ status: "Completed" }),
      Ticket.countDocuments(),
      Ticket.countDocuments({ status: "Resolved" }),
      User.countDocuments(),
      Team.countDocuments(),
    ]);

    const projectCompletion =
      totalProjects === 0
        ? 0
        : Math.round((completedProjects / totalProjects) * 100);

    const ticketResolution =
      totalTickets === 0
        ? 0
        : Math.round((resolvedTickets / totalTickets) * 100);

    const productivity =
      Math.round((projectCompletion + ticketResolution) / 2);

    res.json({
      totalProjects,
      completedProjects,
      totalTickets,
      resolvedTickets,
      totalUsers,
      totalTeams,
      projectCompletion,
      ticketResolution,
      productivity,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};