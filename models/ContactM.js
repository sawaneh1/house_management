import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ContactSchema = Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    // unique: true,
    required: true,
    // trim: true,
  },
});
const Contact = mongoose.model("contact", ContactSchema);
export default Contact;
