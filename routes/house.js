import express from "express";
import multer from "multer";
import {
  DeleteHouse,
  getAllHouses,
  getHouse,
  updateHouse,
} from "../controllers/HouseController.js";

const router = express.Router();

router.get("/houses", getAllHouses);
router.get("/house/:houseId", getHouse);
router.put("/house/:houseId", multer().any(), updateHouse);
router.delete("/house/:houseId", DeleteHouse);
export default router;

// router.put(
//   "/house/:houseId",
//   multer({ storage }).single("imagePath"),
//   async (req, res, next) => {
//     try {
//       // const UpdateData = req.body;
//       const { title, price, street_address, description, city, country } =
//         req.body;

//       const imagePath = `${req.file.destination}/${req.file.filename}`;
//       const updateData = {
//         title,
//         price,
//         street_address,
//         description,
//         city,
//         country,
//         imagePath,
//       };

//       const housesId = req.params.houseId;
//       console.log("req param", req.params);
//       await House.findByIdAndUpdate(housesId, updateData);
//       const house = await House.findById(housesId);
//       if (!house) return res.status(404).send("no house found");

//       res.send(house);
//     } catch (error) {
//       next(error);
//     }
//   }
// );
