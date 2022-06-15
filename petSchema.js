const mongoose = require("mongoose");


const petSchema = new mongoose.Schema({
    petName : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min :1,
        max:99
    }
})

module.exports = mongoose.model('petSchema' , petSchema);