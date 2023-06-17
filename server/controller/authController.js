const UserModel = require('../model/model')

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if name is entered
        if (!name) {
            return res.json({
                error: "Name is required"
            });
        }

        // Check if email is entered
        if (!email) {
            return res.json({
                error: "Email is required"
            });
        }

        // Check if password is entered
        if (!password || password.length < 6) {
            return res.json({
                error: "Password is required with at least 6 characters"
            });
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

        // Send success response
        res.json({
            message: "User registered successfully"
        });
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

        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.json({
                error: "No such user found"
            });
        }

        // Check if passwords match
        if (password !== user.password) {
            return res.json({
                error: "Incorrect password"
            });
        }

        // Send success response
        res.json({
            message: "User signed in successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

module.exports = {
    register,
    signinUser,
};
