// models 
const slotModel = require('../Models/slotModels')
const applicationModel = require('../Models/application')

module.exports = {
    createSlot: async ({ date, startTime, endTime }) => {
        try {
            const slot = new slotModel({
                date,
                startTime,
                endTime
            })
            await slot.save().then((res) => { return res })
        } catch (error) {
            return error
        }
    },
    getAvailable: async () => {
        try {
            return await slotModel.find({ bookedStatus: false }) 
        } catch (error) {
            console.log(error)
        }
    },

    getBooked: async () => {
        try {
            return await slotModel.find({ bookedStatus: true }).lean()
        } catch (error) {
            return error
        }
    },

    bookSlot: async(payload)=>{
        try {
            return await slotModel.updateOne({_id : payload.id},{$set:{bookedId : payload.applicationId, bookedStatus : true}})
        } catch (error) {
            console.log(error);
        }
    }
}