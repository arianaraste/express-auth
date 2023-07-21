import { IUser } from "./types/model.type"

declare global {
    namespace Express {
        interface Request {
            isAuthenticate : boolean ,
            user : {
                fullname : IUser["fullname"],
                email : IUser["email"]
            }
        }
    }
}