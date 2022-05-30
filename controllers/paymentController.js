import Payment from "../models/PaymentM.js";

export const createPayment = async (req, res, next) => {
  try {
    const paymentData = {
      fname: req.body.fname,
      lname: req.body.lname,
      price: req.body.price,
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
