// // Import express

// import express from "express";

// // Import cors

// import cors from "cors";

// // Import connection
// import db from "./config/database.js";

// // Import router

// import Router from "./routes/admin.js";

// // Init express

// const app = express();
// // use express json
// app.use(express.json());
// // use cors
// app.use(cors());
// // Testing database connection
// try {
//   await db.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }
// // use router
// app.use("/", Router);
// // listen on port
// app.listen(5000, () => console.log("Server running at http://localhost:5000"));

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import jwt from "jsonwebtoken";
import adminRoutes from "./routes/admin.js";
import paymentRoutes from "./routes/payment.js";
import houseRoutes from "./routes/house.js";
import contactRoute from "./routes/contact.js";
import path from "path";
import { fileURLToPath } from "url";

// import User from "./model/userModel.js";
// console.log("is : ", process.env);

dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use("/File", express.static(path.join(__dirname, "File")));

// const CONNECTION_URL =
//   "mongodb+srv://bubacarr:3973993B@cluster0.0wklubf.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const hostName = "0.0.0.0";

//
app.use(cors());

try {
  app.listen(PORT, hostName, () =>
    console.log(`Server Running on Port:${hostName}:${PORT}`)
  );
} catch (error) {
  console.log("errr", error);
}
// app.use(async (req, res, next) => {
//   if (req.headers["x-access-token"]) {
//     const accessToken = req.headers["x-access-token"];
//     const { userId, exp } = await jwt.verify(
//       accessToken,
//       process.env.JWT_SECRET
//     );
//     // Check if token has expired
//     if (exp < Date.now().valueOf() / 1000) {
//       return res.status(401).json({
//         error: "JWT token has expired, please login to obtain a new one",
//       });
//     }
//     res.locals.loggedInUser = await User.findById(userId);
//     next();
//   } else {
//     next();
//   }
// });

app.use("/", adminRoutes);
app.use("/", paymentRoutes);
app.use("/", houseRoutes);
app.use("/", contactRoute);
