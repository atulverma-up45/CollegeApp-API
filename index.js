import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/database.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import ejsMate from "ejs-mate";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setup ejs and ejs mate
app.set("view engine", "ejs");
app.set("views", "./views");
app.engine("ejs", ejsMate);


// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, "public")));


// Middleware to parse json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// adding cookieParser
app.use(cookieParser());

// database connect
connectDB();

// home page url
app.get("/",  (req, res) => {
  res.render("./frontent/index.ejs");

});

// Mounting the userRoutes on the root (/) path
app.use("/api/v1/", userRoutes);

// server listen on port
app.listen(PORT, () => {
  console.log("Your Server is On Port :", PORT);
});
