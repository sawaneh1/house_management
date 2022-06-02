import express from "express";
import multer from "multer";
import {
  createContact,
  DeleteContact,
  getAllContacts,
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/contact", multer().any(), createContact);
router.get("/contacts", getAllContacts);
router.delete("/contact/:contactId", DeleteContact);
export default router;
