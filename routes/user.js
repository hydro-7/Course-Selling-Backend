const express = require("express");
const Router = express.Router;
// alternatively;    const { Router } = require("express")
const { userModel, purchaseModel, courseModel } = require("../db");

const userRouter = Router();
// now all the routes will use userRouter.post() instead of app.post()

userRouter.post("/signup", function(req, res) {

});

userRouter.post("/signin", function(req, res) {

});

userRouter.get("/purchases", function(req, res) {

});

module.exports = {
    userRouter: userRouter
}