import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AdminSchema = Schema({
  lname: {
    type: String,
    // unique: true,
    required: true,
  },

  fname: {
    type: String,
    // unique: true,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});
const Admin = mongoose.model("admin", AdminSchema);
export default Admin;
