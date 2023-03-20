const mongoose = require('mongoose')


const statusSchema = mongoose.Schema({
    status : {
        type : String,
        default : "Pending",
        enum : ["Pending","Approved","Rejected"]
    }
})
const applicationSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    company : {
        type : String,
        required : true,
        unique : true 
    },
    img : {
        type : String
    },
    team : {
        type : String
    },
    products : {
        type : String
    },
    problem : {
        type : String
    },
    unique : {
        type : String
    },
    value : {
        type : String
    },
    competitor : {
        type : String
    },
    revenue : {
        type : String
    },
    marketSize : {
        type : String
    },
    marketPlan : {
        type : String
    },
    incubation : {
        type : Boolean 
    },
    incubationPhysical : {
        type : Boolean
    },
    status : {
        type : String,
        default : "New",
        enum : ["Pending","Approved","Rejected","New"] 
    },
    userId : {
        type : String,
        required : true
    },
    booked : {
        type : Boolean,
        default : false
    }

},{timestamps : true}) 

const applicationModel = mongoose.model('Applications',applicationSchema) 
module.exports = applicationModel 