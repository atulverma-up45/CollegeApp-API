import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding cookieParser
app.use(cookieParser());

// database connect
connectDB();

// home page url
app.get("/",  (req, res) => {
  res.send(
    " Welcome To Jhunjhunwala Group of Institutions College App API Home Page"
  );
});

// Mounting the userRoutes on the root (/) path
app.use("/api/v1/", userRoutes);

// server listen on port
app.listen(PORT, () => {
  console.log("Your Server is On Port :", PORT);
});
