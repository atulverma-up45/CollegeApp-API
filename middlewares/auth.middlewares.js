import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/user.models.js";

dotenv.config();

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.accessToken || (req.header("Authorization")?.replace("Bearer ", ""));

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized request. Please log in first.",
      });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);


    const user = await User.findById(decodedToken?._id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Access Token",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication Error:", error);
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the Authentication",
    });
  }
};

export const isTeacher = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Teacher") {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized. This route is protected for teachers.",
      });
    }
    next();
  } catch (error) {
    console.error("Authorization Error:", error);
    return res.status(500).json({
      success: false,
      message: "Techer Account type is not verified due to some issues",
    });
  }
};
export const isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Student") {
      return res.status(403).json({
        success: false,
        message:
          "You are not authorized. This route is protected for Student",
      });
    }
    next();
  } catch (error) {
    console.error("Authorization Error:", error);
    return res.status(500).json({
      success: false,
      message: "Student Account Type is not verified due to some issues",
    });
  }
};
