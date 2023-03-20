const express = require('express')
const app = express()
const cors = require('cors') 
const cookieParser = require('cookie-parser') 
const jwt = require('jsonwebtoken') 
app.use(express.json());
app.use(cors(
    {
        origin: "*", // allow the server to accept request from different origin
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true // allow session cookie from browser to pass through
    }
))
app.use(cookieParser())

// API routes
const authenticationRouter = require('./routes/authRouter') 
const userRouter = require('./routes/userRouter') 
const adminRouter = require('./routes/adminRouter') 
const slotRouter = require('./routes/slotRoute') 

// import dbConnection
const connectToDB = require('./dbConnect')
connectToDB()  

app.use('/authRoute',authenticationRouter) 
app.use('/userRouter',userRouter) 
app.use('/adminRouter',adminRouter) 
app.use('/slotRouter',slotRouter) 


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    next();
});

app.listen(5000, () => {
    console.log("server started on 5000");
})

app.get('/', (req, res) => {
    res.status(200).json("Hello");
}) 

module.exports = app