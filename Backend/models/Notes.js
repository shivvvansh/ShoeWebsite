const mongoose = require('mongoose')
const NotesSchema = new mongoose.Schema({
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
    date:{
         type: Date,
         default: Date.now,
    },
})
module.exports = mongoose.model('Notes',NotesSchema);