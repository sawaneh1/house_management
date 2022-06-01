import House from "../models/HouseM.js";

export const getAllHouses = async (req, res, next) => {
  try {
    const houses = await House.find({});
    res.send(houses);
  } catch (error) {
    next(error);
  }
};

export const getHouse = async (req, res, next) => {
  try {
    const houseId = req.params.houseId;
    const house = await House.findById(houseId);
    if (!house) return next(new Error("house does not exist"));
    res.status(200).json({
      data: house,
    });
  } catch (error) {
    next(error);
  }
};

export const updateHouse = async (req, res, next) => {
  try {
    const UpdateData = req.body;
    console.log(req.files[0]);
    const housesId = req.params.houseId;
    console.log("req param", req.params);
    await House.findByIdAndUpdate(housesId, UpdateData);
    const house = await House.findById(housesId);
    if (!house) return res.status(404).send("no house found");

    res.send(house);
  } catch (error) {
    next(error);
  }
};

export const DeleteHouse = async (req, res, next) => {
  try {
    const houseId = req.params.houseId;
    await House.findByIdAndDelete(houseId);
    res.status(200).json({
      data: null,
      message: "House has been deleted",
    });
  } catch (error) {
    next(error);
  }
};
