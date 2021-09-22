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
    age : {
        type:Number
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate : function(){
            return validator.validate(this.email);
        }
    },
    passWord : {
        type : String,
        required : true,
        min:8
    },
    confirmPassword : {
        type:String,
        required : true,
        min:8,
        validate : function(){
            return this.confirmPassword == this.passWord;
        }
    }
});

const userModel = mongoose.model('userModel',userSchema);

(async function createUser(){
    let user = {
        name : 'shaktimaan',
        age : 22,
        email:'abcde@gmail.com',
        passWord : '123456789',
        confirmPassword : '123456789'
    };

    let userObj = await userModel.create(user);

    console.log(userObj);
})();