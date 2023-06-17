const mongoose = require('mongoose')

const {Schema} = mongoose;


const userSchema = new Schema({
    name: String,
    email:{
        type: String,
        unique: true
    },
    password: String
})


const UserModel = mongoose.model('NewSignUpUser', userSchema);

module.exports = UserModel;