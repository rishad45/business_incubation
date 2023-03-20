//model 
const applicationModel = require('../Models/application')
module.exports = {
    submitApplication: async (payload) => {   
        try {
            const newApplication = new applicationModel({ ...payload }) 
            await newApplication.save()
            return true
        } catch (error) {
            console.log(error);
            return false 
        }
    },

    // check user submitted before
    isSubmittedBefore : async(payload) => {
        let isBefore
        try{
            await applicationModel.findOne({userId : payload}).then((res)=>{
                res == null ? isBefore=false : isBefore = true 
            })
            return isBefore
        }catch(err){
            isBefore = true
            return isBefore
        }
    },

    // submit status 
    submitStatus : async(payload)=>{
        try{
            return await applicationModel.findOne({userId : payload},{_id:1,status : 1, booked : 1})  
        }catch(err){
            console.log(err) 
            return false
        }
    }
}