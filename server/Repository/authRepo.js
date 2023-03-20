// models
const userModel = require('../Models/userModels')
// libraries
const bcrypt = require('bcrypt')


module.exports = {
    signUpDB: async (payload) => {
        try {
            const { name, email, phone, password } = payload
            const newUser = new userModel({
                name,
                email,
                phone,
                password
            })
            await newUser.save()
        } catch (error) {
            console.error(error)
        }
    },
    // checking if user exist or not
    isUserExist: async (emailId) => {
        try {
            return await userModel.findOne({ email: emailId }).lean()
        } catch (error) {
            console.log(error)
        }
    },
    // get User By Id
    getUserById : async(userId) => {
        try {
            return await userModel.findById(userId) 
        } catch (error) {
            console.log(error) 
        }
    }

}