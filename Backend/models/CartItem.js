const mongoose = require('mongoose')
const CardItems = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        required: true,
        type: String,
    },
    desc:{
        required: true,
        type: String,
    },
    image:{
        type: String,
        default: "general"
    },
    Quantity:{
        type: Number,
        default: 1
    },
    price:{
        type: Number,
        required: true
    },
    date:{
         type: Date,
         default: Date.now,
    },
})
module.exports = mongoose.model('CardItems',CardItems);