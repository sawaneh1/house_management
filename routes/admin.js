import express from "express";
import multer from "multer";
import HouseM from "../models/HouseM.js";
// import { Login, register } from "../controllers/UserController.js";
import { login, signup } from "../controllers/adminController.js";
const router = express.Router();

// router.post("/register", register);
router.post("/register", signup);
router.post("/login", login);
// onst router = express.Router();
// router.post("/uploads", upload);
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./File");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// const saveImage
router.post(
  "/uploads",
  //   multer().any(),
  multer({ storage }).single("imagePath"),
  async (req, res) => {
    // console.log("reqqq", req.body.toString());

    const data = `${req.file.destination}/${req.file.filename}`;
    console.log("data", req);
    const newHouse = new HouseM({
      title: req.body.title,
      description: req.body.description,
      imagePath: data,
      price: req.body.price,
    });

    // address_id: req.body.address_id,

    //   console.log("imgg", imageData);
    //   const obj = Object.assign({}, imageData);
    await newHouse.save();
    // const newdata = JSON.stringify(imageData);
    // console.log("dara", newdata);
    //   const imgData = await HouseM.ne
    // console.log("res", res);
    // console.log("images", images);
    res.send(newHouse);
    // Image.save(images);
  }
);

export default router;
