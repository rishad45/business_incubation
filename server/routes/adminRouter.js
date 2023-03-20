const express = require('express')
const router = express.Router()
// controllers
const adminController = require('../Controllers/adminController')

// api's
// alll users
router.post('/api/getAllusers',adminController.getAllUsers) 

// all new applications 
router.post('/api/getNewApplications',adminController.getNewApplications)

// all pending applications 
router.post('/api/getPendingApplications',adminController.getPendingApplications)

// all new applications 
router.post('/api/getApprovedApplications',adminController.getApprovedApplications)  

// approve application
router.post('/api/approveApplication',adminController.approveApplication)

// move to pending
router.post('/api/moveToPending',adminController.moveToPending)  

module.exports = router 