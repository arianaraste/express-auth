import mongoose, {} from "mongoose";
import { IUser } from "../types/model.type";

const UserSchema = new mongoose.Schema<IUser>({
    fullname : {type : String , required : true , trim : true} ,
    password: {type : String , required : true},
    email : {type : String , required : true , unique : true}
});

export const UserModel = mongoose.model<IUser>("User" , UserSchema);
