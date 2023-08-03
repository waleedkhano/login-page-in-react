const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRouter = require('./routes/routes')


const app = express();




app.use(express.json());
app.use(('/user'), userRouter);

mongoose.connect("mongodb://127.0.0.1:27017/RegisterProject")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("DataBase connected and server is running successfully")
    })
})

