const mongoose = require('mongoose')

const noteTemplate = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('note', noteTemplate)