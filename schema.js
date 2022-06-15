const mongoose = require("mongoose");


const owner = new mongoose.Schema({
    email: {
        type:String,
        required : true,
        lowercase: true
    },
    age: {
        type:Number,
        min:1,
        max:99
    },
    firstName : {
        type : String,
        required : true
    },

})

module.exports = mongoose.model("owner", owner);