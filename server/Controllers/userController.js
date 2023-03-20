// repositories
const userRepository = require('../Repository/userRepo')
module.exports = {
    // submit the application form
    submitApplication: async (req, res) => {
        try {
            console.log("req.body", req.body)
            const isSubmittedBefore = await userRepository.isSubmittedBefore(req.body.userId)
            if (isSubmittedBefore) {
                return res.status(401).send({ message: "User already Submitted", success: false })
            } else {
                const submitted = await userRepository.submitApplication(req.body)
                if (submitted) {
                    return res.status(200).send({ message: "Form submitted succesfully ", success: true })
                } else {
                    res.status(401).send({ messsage: "Error", success: false }) 
                }
            }

        } catch (error) {
            console.log(error)
            res.status(401).send({ message: "Error when registering", success: false })
        }
    },

    // check a users application status 
    checkApplicationStatus : async (req,res) => { 
        console.log("cobra copy...over......", req.body.userId); 
        const status = await userRepository.isSubmittedBefore(req.body.userId)
        if(status){
            const status = await userRepository.submitStatus(req.body.userId) 
            status == false ? res.status(401).send({message:"Error From server" , success:false}) : res.status(200).send({message: status, success :true}) 
        }else{
            return res.status(200).send({message : "didn't register", fresh : true}) 
        }
    },




}