const mongoose = require('mongoose');
const validator = require("email-validator");
const Link = require('../security');
const dbLink = Link.mogoLink;

mongoose.connect(dbLink).then(function(){
    console.log("db connected");
})

.catch(function(err){
    console.log(err);
})

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ratings : {
        type : Number,
    },
    price : {
        type : Number,
        required : true
    },
    delivery : {
        type : Boolean,
        required : true 
    },
    meals : {
        type :Number,
    },
    description : {
        type : String
    }

});
