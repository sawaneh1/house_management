import express from "express";
import multer from "multer";
import {
  createPayment,
  DeletePayments,
  getAllPayments,
  updatePayment,
} from "../controllers/paymentController.js";
import userAuth from "../middleware/Auth/user.js";

const router = express.Router();

router.post("/create_payment", multer().any(), createPayment);
router.get("/payments", getAllPayments);
router.put("/edit_payment/:paymentId", multer().any(), updatePayment);
router.delete("/payment/:paymentId", DeletePayments);
export default router;
