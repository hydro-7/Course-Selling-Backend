const { Router } = require("express");
const { purchaseModel, courseModel } = require("../db")
const courseRouter = Router(); 

courseRouter.post("/purchase", function(req, res) {

});

courseRouter.post("/preview", function(req, res) {

});


module.exports = {
    courseRouter: courseRouter
}