import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PaymentSchema = Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  house_id: {
    type: Schema.Types.ObjectId,
    ref: "house",
    // require: true,
  },

  amount: {
    type: Number,
    require: true,
  },

  Date: {
    type: Date,
    default: Date.now(),
    // unique: true,
    required: true,
    // trim: true,
  },
});
const Payment = mongoose.model("Payment", PaymentSchema);
export default Payment;
