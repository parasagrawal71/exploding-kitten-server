const express = require("express");
const {
  getUsers,
  getUserByUsername,
  createUser,
  editUser,
} = require("./user.controller");

const userRouter = express.Router();

// REQUESTS
userRouter.get("/", getUsers);
userRouter.get("/:username", getUserByUsername);
userRouter.post("/", createUser);
userRouter.put("/:username", editUser);

module.exports = userRouter;
