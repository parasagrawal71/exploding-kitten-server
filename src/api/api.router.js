const express = require("express");

// IMPORT OF ROUTER TO ALL RESOURCES
const userRouter = require("./user/user.router");

const apiRouter = express.Router();

// ROUTER TO ALL RESOURCES
apiRouter.use("/users", userRouter);

module.exports = apiRouter;
