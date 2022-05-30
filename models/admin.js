import db from "../config/database.js";

import { Sequelize } from "sequelize";
// import connection
// import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Admin = db.define("admins", {
  // Define attributes

  fname: {
    type: DataTypes.STRING,
  },

  lname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  // userType: DataTypes.STRING,
  address_id: {
    type: DataTypes.INTEGER,
  },
  freezeTableName: true,
});

// Export model Product
export default Admin;
