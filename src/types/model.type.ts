import { Document } from "mongoose";



export interface IUser extends Document {
    fullname : string ,
    password : string ,
    email : string
};