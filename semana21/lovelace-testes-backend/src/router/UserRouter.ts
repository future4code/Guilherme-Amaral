import express from "express";
import UserController from "../controller/UserController";
import userController from "../controller/UserController";

export const userRouter = express.Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/users/profile/:id", UserController.getUserbyId)
