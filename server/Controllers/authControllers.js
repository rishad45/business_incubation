// repositories
const authRepo = require('../Repository/authRepo')

//repositories

//env
require('dotenv').config() 
// libraries
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 

module.exports = {
    signup: async (req, res) => { 
        try {
            let userExist = await authRepo.isUserExist(req.body.email) 
            if (userExist === null) {
                req.body.password = await bcrypt.hash(req.body.password, 10)
                await authRepo.signUpDB(req.body) 
                res.status(200).send({ message: "Registration succesful", success: true })
            }else{
                res.status(200).send({message : "user Exists", success : false}) 
            }
        } catch (error) {
            res.status(500).send({ message: "Error when registering", success: false })
        }
    },

    login : async(req,res) => {
        try{
            // finding the user 
            const user = await authRepo.isUserExist(req.body.email) 
            if(user !== null){ 
                //user exists...
                // checking if password is correct or not
                console.log("1"); 
                const isMatch = await bcrypt.compare(req.body.password, user.password)
                if(isMatch){
                    // password match....
                    // generating jwt token
                    const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{ 
                        expiresIn : "1d" 
                    })
                    // sending response
                    res.status(200).send({message : "Login successful 🎉", success : true, token : token})  

                }else{
                    // password mismatch
                    res.status(500).send({message : "You entered a wrong password", success : false}) 
                }
            }else{
                res.status(200).send({message : 'User Does not exists', success : false})  
            }
        }catch{
            res.status(500).send({message : "Something went wrong", success : false})
        }
    },

    verifyAuth: async(req,res)=> {
        try {
            const user = await authRepo.getUserById(req.body.userId) 
            if(!user){
                return res.status(401).send({message: "User does not exists", success : false})
            }else{
                res.status(200).send({success : true, data : { 
                    name : user.name,
                    email : user.email
                }})
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({message : "Something went wrong", success : false, error}) 
        }
    }
}   