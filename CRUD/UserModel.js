const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
})

module.exports = mongoose.model("trialbase", userschema);