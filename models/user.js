const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:"true",
        unique:"true"
    },
    email:{
        type:String,
        required:"true",
        unique:"true"
    },
    password:{
        type:String,
        required:"true",
        unique:"true"
    },
    confirm_password:{
        type:String,
        required:"true",
        unique:"true"
    },
    varification_status:{
        type:boolean,
        required:"true",
        unique:"true"
    },
} ,  {timestamps:true},
)

const user = mongoose.Schema('user',UserSchema);

module.exports = db;
