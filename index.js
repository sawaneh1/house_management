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

// dotenv.config();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

// import postRoutes from "./routes/posts.js";

const app = express();

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use("/File", express.static(path.join(__dirname, "File")));

const CONNECTION_URL = process.env.MONGODB_URI;
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

app.use("/", adminRoutes);
app.use("/", paymentRoutes);
app.use("/", houseRoutes);
app.use("/", contactRoute);
