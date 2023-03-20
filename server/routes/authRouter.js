var express = require('express');
var router = express.Router();

// middlewares
const authMiddleware = require('../Middlewares/AuthMiddleware')

// controllers
const authController = require('../Controllers/authControllers')

router.post('/signup',authController.signup)   

router.post('/login',authController.login) 

router.post('/verifyAuth',authMiddleware,authController.verifyAuth)  


module.exports = router;
