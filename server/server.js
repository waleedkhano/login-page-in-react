const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/routes')


const app = express();




app.use(express.json())
app.use(('/user'), userRouter)


mongoose.connect("mongodb://localhost:27017")
.then(()=>{
    app.listen(5000, ()=>{
        console.log("DataBase connected and server is running successfully")
    })
})

