//repo's
const adminRepo = require('../Repository/adminRepo') 
module.exports = { 

    // api to get all users
    getAllUsers : async(req,res)=>{
        try{
            console.log(1);
            const users = await adminRepo.getAllUsers() 
            users !== null ? res.status(200).send({message : "User fetched succesfully" ,data : users, success : true}) : res.status(401).send({message : 'Error in api call ', success : false})
        }catch(err){
            res.status(500).send({message : err , success : false})  
        } 
    },

    // api to get all new application
    getNewApplications : async(req,res)=>{
        try{
            const newApplications = await adminRepo.getNewApplications() 
            newApplications !== null ? res.status(200).send({message : "data fetched successfully", data : newApplications , success : true}) : res.status(500).send({message : 'No applications here' , success : false})
        }catch(err){
            res.status(500).send({message : err , success : false}) 
        }
    },

    // api to get all pending applications
    getPendingApplications : async(req,res)=>{
        try{
            const pendingApplications = await adminRepo.getPendingApplications()    
            pendingApplications !== null ? res.status(200).send({message : 'data fetched successfully', data : pendingApplications , success : true}) : res.status(500).send({message : 'No applications here' , success : false})
        }catch(err){
            res.status(500).send({message : err , success : false}) 
        } 
    },

    //api to get all approved applications
    getApprovedApplications : async(req,res)=>{
        try{
            const approvedApplications = await adminRepo.getApprovedApplications() 
            approvedApplications !== null ? res.status(200).send({message : "data fetched succesfully", data : approvedApplications , success : true}) : res.status(500).send({message : 'No applications here' , success : false})
        }catch(err){
            res.status(500).send({message : err , success : false}) 
        }
    },
    // approve application
    approveApplication : async(req,res)=>{ 
        try{ 
                const response = await adminRepo.approveApplication(req.body.id) 
            res.status(200).send({message : 'Application approved', success : true}) 
        }catch(err){ 
            res.status(500).send({message : 'error from server', success : false})
        }
    },

    // move application to pending
    moveToPending : async(req,res)=>{
        try{
            const response = await adminRepo.moveToPending(req.body.id)
            res.status(200).send({message : "Application is moved to Pending", success: true}) 
        }catch(err){
            res.status(500).send({message : "There may be an Error in the server please try again", success : false}) 
        }
    }
}