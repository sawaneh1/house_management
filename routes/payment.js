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
router.get("/payments", userAuth, getAllPayments);
router.put("/edit_payment/:paymentId", userAuth, multer().any(), updatePayment);
router.delete("/payment/:paymentId", userAuth, DeletePayments);
export default router;
