import { ObjectId } from "mongoose";
import { IUser } from "./model.type";
export type requestuser = Partial<IUser>
export interface payload {
    id : ObjectId,
    username : IUser['email']
};