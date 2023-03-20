const mongoose = require('mongoose')

// model
const slotSchema = mongoose.Schema({
    date : {
        type : Date,
        required : true
    },
    startTime : {
        type :  String,
        required : true
    },
    endTime : {
        type : String,
        required : true
    },
    bookedId : {
        type : mongoose.Types.ObjectId,
        ref : 'applications' 
    },
    bookedStatus : {
        type : Boolean,
        default : false 
    }
},{timestamps : true})

const slotModel = mongoose.model('Slots',slotSchema) 
module.exports = slotModel 

