import express from "express";
import { executiveAnalytics } from "../controllers/analyticsController.js";

const router = express.Router();

router.get("/", executiveAnalytics);

export default router;