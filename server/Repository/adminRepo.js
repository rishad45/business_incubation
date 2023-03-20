// models
const userModel = require('../Models/userModels')
const applicationModel = require('../Models/application')
module.exports = {
    getAllUsers: async () => {
        try {
            return await userModel.find().lean() 
        } catch (err) {
            console.log(err)
        }
    },

    // get all new applications
    getNewApplications: async () => {
        try {
            return await applicationModel.find({status : 'New'})   
        } catch (err) {
            console.log(err) 
        }
    },

    // get all pending applications 
    getPendingApplications: async () => {
        try {
            return await applicationModel.find({ status: 'Pending' })
        } catch (err) {
            console.log(err)
        }
    },

    // get all approved applications
    getApprovedApplications: async () => {
        try {
            return await applicationModel.find({ status: 'Approved' })
        } catch (err) {
            console.log(err)
        }
    },

    // approve application
    approveApplication: async (payload)=>{
        try{
            return await applicationModel.findOneAndUpdate({_id : payload},{status : 'Approved'}) 
        }catch(err){
            return err
        }
    },

    // move application to pending
    moveToPending : async(payload)=>{
        try {
            return await applicationModel.findOneAndUpdate({_id: payload},{status : 'Pending'}) 
        } catch (error) {
            return error
        }
    }
}