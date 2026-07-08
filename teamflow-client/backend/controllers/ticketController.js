import Ticket from "../models/Ticket.js";

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({
      createdAt: -1,
    });

    res.json(tickets);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const addTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);

    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(ticket);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    await Ticket.findByIdAndDelete(req.params.id);

    res.json({
      message: "Ticket deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};