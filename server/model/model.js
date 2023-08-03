const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const JWT = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true,'Name is Required']
    },
    email:{
        type: String,
        required:[true,'Email is Required'],
        unique: true
    },
    password: {
        type: String,
        required:[true,'Password is Required']
    }
},{
    timestamps: true,
})

// this function will run before saving the data in database
// to hash the password
userSchema.pre("save", async function(next){
    //it check the password is modified, prevents password from rehashing
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10)
    next()
} )


// Creating JWT token 
userSchema.methods.getJWTToken = function () {
    return JWT.sign({ _id: this._id }, process.env.JWT_SECRET, {
        expiresIn: "10d",
    })
  }


//Comparing password for login
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password )
  }


const UserModel = mongoose.model('NewSignUpUser', userSchema);

module.exports = UserModel;


