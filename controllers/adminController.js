// server/controllers/userController.j
// import User from "../model/userModel.js";
import Admin from "../models/adminM.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
// import roles from "../roles/roles.js";

// async function hashPassword(password) {
//   return await bcrypt.hash(password, 10);
// }

// async function validatePassword(plainPassword, hashedPassword) {
//   return await bcrypt.compare(plainPassword, hashedPassword);
// }

export const signup = async (req, res, next) => {
  const { fname, lname, email, password } = req.body;

  try {
    console.log(req.body);
    const oldAdmin = await Admin.findOne({ email });
    // const hashedPassword = await hashPassword(password);

    // const hashedPassword = await bcrypt.hash(password, 12);
    const newAdmin = new Admin({
      fname,
      lname,
      email,
      password,
    });
    // newAdmin.password = bcrypt.hashSync(password, 12);
    if (oldAdmin) {
      return res.status(400).json({ message: "admin already exists" });
    }
    const token = jwt.sign({ adminId: newAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    // newAdmin.accessToken = accessToken;
    await newAdmin.save();
    res.json({
      data: newAdmin,
      token,
    });
  } catch (error) {
    next(error);
    console.log("this an erro", error.message);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json("email does not exist");

    // const validPassword = await validatePassword(password, admin.password);
    // const validPassword = bcryptjs.compare(password, admin.password);
    console.log("dmin", admin);
    if (password !== admin.password)
      return res.status(401).send("password incorrect");
    const token = jwt.sign({ adminId: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    await Admin.findByIdAndUpdate(admin._id, { token });
    res.status(200).json({
      data: admin,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const getadmins = async (req, res, next) => {
  const admins = await Admin.find({});
  res.status(200).json({
    data: admins,
  });
};

export const getadmin = async (req, res, next) => {
  try {
    const adminId = req.params.adminId;
    const admin = await Admin.findById(adminId);
    if (!admin) return next(new Error("admin does not exist"));
    res.status(200).json({
      data: admin,
    });
  } catch (error) {
    next(error);
  }
};

export const updateadmin = async (req, res, next) => {
  try {
    const update = req.body;
    const adminId = req.params.userId;
    await Admin.findByIdAndUpdate(adminId, update);
    const admin = await Admin.findById(adminId);
    res.status(200).json({
      data: admin,
      message: "User has been updated",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const adminId = req.params.adminId;
    await Admin.findByIdAndDelete(adminId);
    res.status(200).json({
      data: null,
      message: "User has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
