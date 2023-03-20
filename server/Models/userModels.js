const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true 
    }
}, { timestamps : true})   

const userModel = mongoose.model('Users',UserSchema) 
module.exports = userModel 