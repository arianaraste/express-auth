import { compareSync, genSaltSync, hashSync } from "bcrypt"
import { payload } from "../types/utils.type";
import jwt, { JwtPayload } from "jsonwebtoken"
const secret : string = "4204957E27FA164A6782C54BC24ECB8E"
export function hashPass(pass : string) : string {
    const salt = genSaltSync(10);
    return hashSync( pass , salt)
};

export function confirmPass(pass :  string , hash : string ) : boolean {
    return compareSync( pass , hash)
};

export function signToken(payload : payload):string{

   return jwt.sign(payload , secret)

};
export function verifyToken(token : string) : string | JwtPayload{
    return jwt.verify(token , secret)
};