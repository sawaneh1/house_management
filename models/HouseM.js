import mongoose from "mongoose";

const Schema = mongoose.Schema;

const HouseSchema = Schema({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    // unique: true,
    required: true,
  },

  imagePath: {
    type: String,
    // unique: true,
    required: true,
    // trim: true,
  },
  //   street_address: {
  //     type: String,
  //     required: true,
  //   },
  //   city: {
  //     type: String,
  //     // required: true,
  //   },
  //   country: {
  //     type: String,
  //     // required: true,
  //   },
});
const House = mongoose.model("hou", HouseSchema);
export default House;
