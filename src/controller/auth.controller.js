const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function registerUser(req, res) {
  const { email, username, password } = req.body;

  const UserExist = await userModel.findOne({
    username,
  });

  if (UserExist) {
    return res.status(409).json({ message: "User Already Exist" });
  }

const user = await userModel.create({
  email,
  username,
  password: await bcrypt.hash(password, 10),
});

  res.status(201).json({
    message: "User Registered Successfully",
    user,
  });
}

async function loginUser(req, res) {
  const { email, username, password } = req.body;

  const user = await userModel.findOne({ username });

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);

  res.status(200).json({ message: "User LoggedIn Successfully" });
}

async function getCurrentUser(req,res) {
    const user = await userModel.findById(req.userId)

    res.json({
        message:"User Data Fetched successfully",
        user
    })
}

async function logoutUser(req,res) {
   res.clearCookie("token")
   res.json({ message: "User logged out successfully" });

    
}
module.exports = {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser
};
