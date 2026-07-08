import Project from "../models/Project.js";

// GET all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });

    res.json(projects);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// CREATE project
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      status,
      priority,
      dueDate,
    } = req.body;

    const project = await Project.create({
      title,
      description,
      status,
      priority,
      dueDate,
      owner: req.user.id,
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// UPDATE project
export const updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// DELETE project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);

    res.json({
      message: "Project deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};