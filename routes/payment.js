import express from "express";
import multer from "multer";
import { createPayment } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/create_payment", multer().any(), createPayment);
export default router;
