import mongoose from "mongoose";
import { IUser } from "../utils/interfaces/userModel";
 import validator  from "validator";
// const validator=require('validator')
// const bcrypt=require('bcryptjs')
// const jwt=require('jsonwebtoken')
// const crypto=require('crypto');

const userSchema=new mongoose.Schema<IUser>({
    email:{
        type:String,
        required:[true,'Please provide an email'],
        validate:[validator.isEmail,'Please enter email in correct format'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please provide an password'],
        select:false,
        minLength:[6,"Password should be at least 6 char"]
    },
    
    role:{
        type:String,
        default:'User'
    },
    photo:{
        id:{
            type:String,
            required:false
        },
        secure_url:{
            type:String,
            required:false
        }
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
    createdAt:{
        type:Date,
        default:Date.now
    }
   
})



module.exports=mongoose.model('User',userSchema)
