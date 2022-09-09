import {Request,Response} from 'express';

const User=require('../model/user')


export const userSignup=async(req:Request,res:Response)=>{
        res.send("useSignupss")
    
}