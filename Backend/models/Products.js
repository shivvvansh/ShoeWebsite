const mongoose = require('mongoose')
const Products = new mongoose.Schema({
    title:{
        required: true,
        type: String,
    },
    desc:{
        required: true,
        type: String,
    },
    tag:{
        required: true,
        type: String,
    },
    image:{
        type: String,
        default: "general"
    },
    price:{
        type: Number,
        required: true
    },
    special:{
        type: String,
        default: "Display-Cart"
    },
    date:{
         type: Date,
         default: Date.now,
    },
})
module.exports = mongoose.model('Products',Products);