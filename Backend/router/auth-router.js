const express = require("express");

const router = express.Router();  //thisis class

const authControllers = require("../router/auth-controller");

//router has one more method that is route
router.route("/"). get( authControllers.home); 

router.route("/register").get(authControllers.register)
    

module.exports = router;