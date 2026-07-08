import Document from "../models/Document.js";
import cloudinary from "../config/cloudinary.js";

// Get All Documents
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find().sort({
      createdAt: -1,
    });

    res.json(documents);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Upload Document
export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

    const document = await Document.create({
      name: req.file.originalname,
      url: req.file.path,
      publicId: req.file.filename,
      type: req.file.mimetype,
      size: req.file.size,
      uploadedBy: "Admin",
    });

    res.status(201).json(document);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Document
export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    await cloudinary.uploader.destroy(document.publicId, {
      resource_type: "auto",
    });

    await document.deleteOne();

    res.json({
      message: "Document deleted successfully",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};