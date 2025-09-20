const express = require("express");
const userAuth = require("./userAuth");
const getUserData = require("./userData"); // import directly, no destructure

const middlewareRouter = express.Router();

middlewareRouter.get("/data", userAuth, getUserData);

module.exports = middlewareRouter;
