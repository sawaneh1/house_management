import express from "express";
import { getAllHouses, updateHouse } from "../controllers/HouseController.js";

const router = express.Router();

router.get("/houses", getAllHouses);
router.put("/house/:house_id", updateHouse);
export default router;
