import { UserRoute } from './user/index';
import express,{Application,Request,Response,NextFunction} from 'express';


export class Routes{
    private app:Application=express();
    private userRoutes=new UserRoute();
    constructor(){
        this.app.use('/api',this.authRoutes())
    }
    public authRoutes(){
       return this.userRoutes.signUp()
    }

}