import express from "express";

import protect from "../middleware/authMiddleware.js";
import authorize from "../middleware/roleMiddleware.js";

import {
  getUsers,
  getUser,
  updateRole,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Get all users (Admin only)
router.get(
  "/",
  protect,
  authorize("Admin"),
  getUsers
);

// Get one user (Admin only)
router.get(
  "/:id",
  protect,
  authorize("Admin"),
  getUser
);

// Update user role (Admin only)
router.put(
  "/:id",
  protect,
  authorize("Admin"),
  updateRole
);

// Delete user (Admin only)
router.delete(
  "/:id",
  protect,
  authorize("Admin"),
  deleteUser
);

export default router;