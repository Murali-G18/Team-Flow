import Project from "../models/Project.js";
import Ticket from "../models/Ticket.js";
import Team from "../models/Team.js";
import User from "../models/User.js";

export const getDashboardStats = async (req, res) => {
  try {

    const totalProjects = await Project.countDocuments();

    const completedProjects = await Project.countDocuments({
      status: "Completed",
    });

    const planningProjects = await Project.countDocuments({
      status: "Planning",
    });

    const inProgressProjects = await Project.countDocuments({
      status: "In Progress",
    });

    const totalTickets = await Ticket.countDocuments();

    const openTickets = await Ticket.countDocuments({
      status: "Open",
    });

    const resolvedTickets = await Ticket.countDocuments({
      status: "Resolved",
    });

    const totalMembers = await Team.countDocuments();

    const totalUsers = await User.countDocuments();

    res.json({
      totalProjects,
      completedProjects,
      planningProjects,
      inProgressProjects,

      totalTickets,
      openTickets,
      resolvedTickets,

      totalMembers,
      totalUsers,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};