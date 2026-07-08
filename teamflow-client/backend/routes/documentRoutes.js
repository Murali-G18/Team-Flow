import express from "express";
import upload from "../middleware/upload.js";

import {
  getDocuments,
  uploadDocument,
  deleteDocument,
} from "../controllers/documentController.js";

const router = express.Router();

router.get("/", getDocuments);

router.post(
  "/upload",
  upload.single("file"),
  uploadDocument
);

router.delete("/:id", deleteDocument);

export default router;