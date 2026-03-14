const express = require('express');
const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const router = express.Router();

router.post('/register', async(req,res) => {
    const {username,password}= req.body

    const isUserAlreadyExist = await userModel.findOne({
        username
    })
    if (isUserAlreadyExist) {
        return res.status(401).json({message:"User Already Exist"})
    }

    const user =await userModel.create({username,password})

    res.status(201).json({message:"User Registered Successfully",user})

})

router.post('/login', async(req,res) => {
    const {username,password} = req.body
    const user = await userModel.findOne({
        username
    })
    if (!user) {
        return res.status(401).json({message:"User Not found"})
    }
     const isPasswordValid = user.password == password

     if (!isPasswordValid) {
        return res.status(401).json({
            message:"Invalid Password"
        })
     }

     const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

     res.cookie('token',token)

     res.status(201).json({message:"user Logged in successfully"})
})

router.get('/user', async(req,res) => { 
    const token = req.cookies.token
    console.log(token);
    

    if (!token) {
        return res.status(409).json({
            message:"Unauthorized User"
        })
    }
try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET)
    const user = await userModel.findOne({
      _id:decoded.id
    })
    res.status(200).json({
    message:"User Fetched Successfully",
    user}
    )

} catch (error) {
           return res.status(401).json({ message: "Invalid Token" });

    
}

  
})

router.get('/logout', async(req,res) => {
    const token = req.cookies.token
    res.clearCookie(token)
   
   res.status(200).json({message:"User Logged out Successfully"})
})




module.exports = router