// repositories
const slotRepo = require('../Repository/slotRepo')
module.exports = {
    getAvailableSlots: async (req, res) => {
        try {
            console.log("ris");
            const availble = await slotRepo.getAvailable()
            console.log(availble) 
            availble.length !== 0 ? res.status(200).send({ message: "Fetched all the available slots succesfully", data: availble, success: true }) : res.status(401).send({ message: "There is no available slots", data: [], success: true })
        } catch (error) {
            res.status(500).send({ message: "Fetch unsucesful", data: availble, success: false })
        }

    },
    getBookedSlots: async (req, res) => {
        try {
            console.log(req.body);
            const booked = await slotRepo.getBooked() 
            booked.length != 0 ? res.status(200).send({ message: "Fetched all the available slots succesfully", data: booked, success: true }) : res.status(200).send({ message: "There is no booked slots", data: [], success: true })
        } catch (error) {
            res.status(500).send({ message: "Fetch unsucesful", data: availble, success: false }) 
        }
    },
    bookSlot: async (req, res) => {
        try {
            console.log(req.body) 
            const resp = await slotRepo.bookSlot(req.body) 
            res.status(200).send({message : "Slot Booked succesfully",success:true}) 
        } catch (error) {
            res.status(200).send({message:"error",success : false})
        }
    },
    createSlot : async (req,res)=>{
        try {
            const slot = await slotRepo.createSlot(req.body) 
            console.log("slot",slot) 
            res.status(200).send({message : "Slot added succesfully", data : slot, success : true})  
        } catch (error) {
            res.status(500).send({message : "unsuccesful", success : false})
        }
    }
}