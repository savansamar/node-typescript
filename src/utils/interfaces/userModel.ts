export interface IUser{
    email:string;
    password:string;
    role?:'user'|'admin';
    photo:any;
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,
    createdAt:object;
}

