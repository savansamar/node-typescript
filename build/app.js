"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//import createHttpError from "http-errors";
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.app.listen(process.env.PORT, () => console.log(`Running on Port ${process.env.PORT}`));
        this.middleware();
        this.main();
        this.routes();
        this.DatabaseConnection();
    }
    DatabaseConnection() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    middleware() {
        this.app.use(express_1.default.json());
        this.app.use(body_parser_1.default.json());
        //this.app.use((req:Request,res:Response,next:NextFunction)=>next(new createHttpError.NotFound()))
    }
    routes() {
    }
    main() {
        // const errorHandler:ErrorRequestHandler=(err,req,res,next)=>{
        //     res.status(err.status || new createHttpError.InternalServerError())
        //     res.send({
        //         status:err.status|| new createHttpError.InternalServerError(),
        //         message:err.message
        //     })
        // }
        this.app.get('/home', this.home);
        //this.app.use(errorHandler)
    }
    home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.send("home");
        });
    }
}
const app = new App();
