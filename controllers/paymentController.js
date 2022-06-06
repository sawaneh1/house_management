import Payment from "../models/PaymentM.js";

export const createPayment = async (req, res, next) => {
  try {
    console.log("body,,", req.body);
    const paymentData = {
      fname: req.body.fname,
      lname: req.body.lname,
      // price: req.body.price,
      email: req.body.email,
      amount: req.body.amount,
      house_id: req.body.house_id,
    };
    const newPayment = new Payment(paymentData);

    await newPayment.save();
    res.send(newPayment);
  } catch (error) {
    next(error);
  }
};

export const getAllPayments = async (req, res, next) => {
  try {
    const payments = await Payment.find({});
    res.send(payments);
  } catch (error) {
    next(error);
  }
};

export const updatePayment = async (req, res, next) => {
  try {
    const UpdateData = req.body;
    const paymentId = req.params.paymentId;
    console.log("req param", req.params);
    await Payment.findByIdAndUpdate(paymentId, UpdateData);
    const payment = await Payment.findById(paymentId);
    if (!payment) return res.status(404).send("no payment found");

    res.send(payment);
  } catch (error) {
    next(error);
  }
};

export const DeletePayments = async (req, res, next) => {
  try {
    const paymentId = req.params.paymentId;
    // console.log('paymentId', pay);
    await Payment.findByIdAndDelete(paymentId);
    res.status(200).json({
      data: null,
      message: "payment has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
