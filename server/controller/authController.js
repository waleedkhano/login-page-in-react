const UserModel = require('../model/model');
const sendToken = require('../utility/sendToken')
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name is entered
        if (!name || !email || !password) {
            return res.json({
                error: "Please Fill all fields"
            });
        }

        // Check if password is entered
        if(password.length < 6){
          return res.json({
            error:"Password should be minimum of six character long."
          })
        }

        // Check if email exists
        const exist = await UserModel.findOne({ email });
        if (exist) {
            return res.json({
                error: "Email has already been taken"
            });
        }

        // Creating a new user
        const user = await UserModel.create({
            name,
            email,
            password
        });

sendToken(res, user, "Registered successfully", 201);



} catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

const signinUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
             return res.json({
                    error: "Please enter all fields"
                })
        }
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({
                error: "invalid user"
            });
        }

        // Check if passwords match
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            res.json({
                error: "invalid user"
            })
        }
        // Generate a JWT token for the user instance and send it in the response
        // const token = user.getJWTToken();
        sendToken(res, user, `Welcome back, ${user.name}`, 200);

        // Send success response
        // res.json({
        //     message: `welcome back ${user.name}`,
        //     token 
        // });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

const logout = (req, res) => {
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
}

module.exports = {
    register,
    signinUser,
    logout
};