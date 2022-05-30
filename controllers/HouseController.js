import House from "../models/HouseM.js";

export const getAllHouses = async (req, res, next) => {
  try {
    const houses = await House.find({});
    res.send(houses);
  } catch (error) {
    next(error);
  }
};

export const updateHouse = async (req, res, next) => {
  try {
    const UpdateData = req.body;
    const housesId = req.params.house_id;
    console.log("req param", req.params);
    await House.findByIdAndUpdate(housesId, UpdateData);
    const house = await House.findById(housesId);
    if (!house) return res.status(404).send("no house found");

    res.send(house);
  } catch (error) {
    next(error);
  }
};
