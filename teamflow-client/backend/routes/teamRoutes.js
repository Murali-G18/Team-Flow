import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getMembers,
  addMember,
  updateMember,
  deleteMember,
} from "../controllers/teamController.js";

const router = express.Router();

router.get("/", authMiddleware, getMembers);

router.post("/", authMiddleware, addMember);

router.put("/:id", authMiddleware, updateMember);

router.delete("/:id", authMiddleware, deleteMember);

export default router;