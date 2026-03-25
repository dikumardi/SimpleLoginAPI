const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:[true, "Account already exists with this email address"],
        required:true
        },
    username:{
           type:String,
        required:true,
        unique:[true, 'Username already taken']
    },
    password:{
        type:String,
        required:true,
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel