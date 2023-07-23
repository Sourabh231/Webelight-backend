const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    cpassword:{
        type:String,
        required:[true,'confirm password is required']
    }
},{timestamps:true});


const adminuserModel = mongoose.model('adminuser',adminSchema);

module.exports = adminuserModel;