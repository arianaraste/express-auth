
import { NextFunction, Request, Response, } from "express";
import { requestuser } from "../types/utils.type";
import { IUser } from "../types/model.type";

export async function getprofile (req : Request , res : Response , next : NextFunction){
   return res.send(req.user)
};