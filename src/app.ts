//import { Auth } from './routes/auth';
import bodyParser from "body-parser";
import express,{Application} from "express";
import { Routes } from "./routes";
require("dotenv").config()


class App {
    private app:Application=express();
    private router=express.Router();
    private endRoute=new Routes()

    constructor(){
        this.bootstrap();
    }

   private bootstrap():void{
       this.listen();
       this.middleware();
       this.routes();
   }

   public middleware():void{
        this.app.use(express.json());
        this.app.use(bodyParser.json());
   }

   public routes(){
    this.app.use('/api',this.endRoute.authRoutes())
   }

   public listen(){
    this.app.listen(process.env.PORT,()=>console.log(`Running on Port ${process.env.PORT}`))
   }

}

new App();


