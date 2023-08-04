const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRouter = require('./routes/routes')
const cors = require("cors")
const ErrorMiddleware = require("./middleware/Error")


const app = express();

app.use("*",cors({
    origin: true,
    credentials: true,
}))


app.use(express.json());
app.use('/user', userRouter);

app.use(ErrorMiddleware)

mongoose.connect("mongodb://127.0.0.1:27017/RegisterProject")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("DataBase connected and server is running successfully")
    })
})

