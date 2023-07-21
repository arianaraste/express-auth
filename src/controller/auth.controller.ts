import { Request,Response,NextFunction } from "express";
import { IUser } from "../types/model.type";
import { UserModel } from "../model/user.model";
import { confirmPass, hashPass, signToken } from "../utils/auth.util";
import { Document } from "mongoose";



export async function Login(req : Request , res : Response , next : NextFunction){
    try {
        const {email , password} = req.body;
        const user : IUser | null = await UserModel.findOne({email});
        if(!user)throw {status : 400 , message : "not fund user"};
        const compare = confirmPass(password , user.password);
        if(!compare)throw {status : 400 , message : "pass or username incorected"};
        const token = signToken({id : user._id , username : user.email});
        res.send({token , message : "login successfullty"})
    } catch (error) {
        next(error)
    }
};
       
export async function Register(req : Request , res : Response , next : NextFunction){
    try {
        const Body : IUser = req.body;
        const hash = hashPass(Body.password)
        Body.password = hash
        const newUser : IUser = await UserModel.create(Body)
        console.log(newUser);
        
        return res.send(`welcome ${newUser.fullname}`);

    } catch (error){
        next(error)
    };
};
