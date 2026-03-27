const mongoose = require('mongoose');

const blacklistTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        unique:true,
        required:[true,'Token is required to added in blacklist']
    }
},{
    timestamps:true
})

const tokenBlacklistModel = mongoose.model('blacklist', blacklistTokenSchema)

module.exports = tokenBlacklistModel