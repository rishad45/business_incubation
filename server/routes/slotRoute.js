const express = require('express')
const router = express.Router()
// controllers
const slotController = require('../Controllers/slotController')

// API'S

// creating a slot
router.post('/api/createSlot',slotController.createSlot)
// for pick available slots
router.post('/api/availableSlots',slotController.getAvailableSlots) 

// for picking booked slot
router.post('/api/bookedSlots',slotController.getBookedSlots) 

// to book a slot
router.post('/api/bookSlot',slotController.bookSlot) 

module.exports = router