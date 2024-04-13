const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    email:{
        required: true,
        type: String,
        unique: true,
    },
    password:{
        required: true,
        type: String,
    },
    // address:{
    //     required: true,
    //     type: String,
    //     default: ""
    // },
    contact:{
        required: true,
        type: Number,
    },
    date:{
         type: Date,
         default: Date.now,
    },
})
module.exports = mongoose.model('User',User);