import { userSignup } from '../../controller/user';
import express,{Request,Response} from 'express';

export class UserRoute{
    private router=express.Router();
    
    constructor(){
        
    }

    public homeRoute(){
        return this.router.get('/home',(req,res)=>{
            res.send('sava at home')  
        })
    }

    public login(){

    }

    public signUp(){
        return this.router.get('/signup',userSignup)
    }

   
}