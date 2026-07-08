import Team from "../models/Team.js";

// Get all members
export const getMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add member
export const addMember = async (req, res) => {
  try {
    const member = await Team.create(req.body);
    res.status(201).json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update member
export const updateMember = async (req, res) => {
  try {
    const member = await Team.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(member);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete member
export const deleteMember = async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);

    res.json({
      message: "Member deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};