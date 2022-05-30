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

// import User from "./model/userModel.js";

dotenv.config();

// import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: false }));

const CONNECTION_URL = "mongodb://127.0.0.1:27017/landManagement_second";
const PORT = process.env.PORT || 5000;
app.use(cors());

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

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
// app.use("/", caseRoutes);
// app.use("/", sendCode);
