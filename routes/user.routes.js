import express from "express";
import {
  signupController,
  loginController,
  sendOTPController,
  changePasswordController,
  logoutUserContoller,
} from "../controllers/user.controllers.js";
import {
  authenticate,
  isTeacher,
  isStudent,
} from "../middlewares/auth.middlewares.js";

const userRoutes = express.Router();

userRoutes.post("/sendOTP", sendOTPController);
userRoutes.post("/signUp", signupController);
userRoutes.post("/logIn", loginController);
userRoutes.post("/changePassword", authenticate, changePasswordController);
userRoutes.post("/logoutUser", authenticate, logoutUserContoller);

// Use 'get' with a callback function for the protected route
userRoutes.get("/student", authenticate, isStudent, (req, res) => {
  res.send("this is secure of student");
});

userRoutes.get("/teacher", authenticate, isTeacher, (req, res) => {
  res.send("this is secure of teacher");
});

export default userRoutes;
