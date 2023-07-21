
import { Request,Response,NextFunction } from "express";

import { verifyToken } from "../utils/auth.util";
import { JwtPayload } from "jsonwebtoken";
import { IUser } from "../types/model.type";
import { UserModel } from "../model/user.model";



export async function checkAuth(req : Request , res : Response , next : NextFunction) : Promise<void>{
try {
    
    
    const auth : string | undefined = req?.headers?.authorization;
    if( typeof auth == "string"){
        const [bearer , Token] = auth?.split(" ");
        !bearer && bearer.toLocaleLowerCase() === "bearer" ? {status : 400 , message : "authorization faild"} : console.log("bearer ok");
        !Token ? {status : 400 , message : "authorization faild"} : console.log("token ok");
        const verifyResult : string | JwtPayload = verifyToken(Token);
        console.log(verifyResult);
        
        const user : IUser | null  = await UserModel.findOne({email : verifyResult});
        req.isAuthenticate == !!user
        !user ? {status : 400 , message : "authorization faild"}  : console.log("user login");
        req.user = {
            fullname : user.fullname,
            email : user.email
        }
        return next();
        
    }throw {status : 400 , message : "authorization faild"}
    
    
    
    
} catch (error) {
    next(error)
}

}