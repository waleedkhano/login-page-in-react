const UserModel = require('../model/model');
const sendToken = require('../utility/sendToken')
const catchAsyncError = require("../middleware/catchAsyncError")

const register = catchAsyncError( async (req, res, next) => {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return next(new Error("Please enter all fields", 400))
        }
        if(password.length < 6){
            return next(new Error("The password charaters must more than 6!"))
        }

        // Check if email exists
        const exist = await UserModel.findOne({ email });
        if (exist) {
            return next(new Error("Email Already Registered"))
        }

        // Creating a new user
        const user = await UserModel.create({
            name,
            email,
            password
        });

sendToken(res, user, "Registered successfully", 201);

});

const signinUser = catchAsyncError(async (req, res, next) => {
        const { email, password } = req.body;
        if (!email || !password) {
            return next(new Error("Please enter all fields", 400));
        }
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return next(new Error("Incorrect Email or Password", 401));
        }

        // Check if passwords match
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return next(new Error("Incorrect Email or password", 401));
        }
       
        sendToken(res, user, `Welcome back, ${user.name}`, 200);

});

const logout = catchAsyncError(async (req, res, next) => {
    res
      .status(200).cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .json({
        success: true,
        message: "Logged Out Successfully",
      });
  });

module.exports = {
    register,
    signinUser,
    logout
};