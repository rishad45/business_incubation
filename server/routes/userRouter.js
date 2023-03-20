const express = require('express')
const router = express()
// middle
const authMiddleware = require('../Middlewares/AuthMiddleware')
// controllers
const userController = require('../Controllers/userController')
//routes
// application form 
router.post('/api/applicationForm',authMiddleware,userController.submitApplication) 

//check appplication status 
router.post('/api/checkApplicationStatus',authMiddleware,userController.checkApplicationStatus)  

module.exports = router 