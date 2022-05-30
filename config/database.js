// import sequelize
import { Sequelize } from "sequelize";
// create connection
const db = new Sequelize(
  "landManagementSystem_second_test",
  "root",
  "sulayMarym=1",
  {
    host: "localhost",
    dialect: "mysql",
  }
);
// export connection
export default db;
