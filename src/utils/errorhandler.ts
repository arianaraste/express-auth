import { Request, Response, NextFunction } from "express";
import { NotFundError, SeverError } from "../types/error.type";

export function NotFundPage(req : Request , res : Response , next : NextFunction) : void {
    const error : NotFundError = {
        error_type : "Not Fund Page",
        status :   404 ,
        message : `not fund page ${req.url}`
    }
    res.json(error);
    
};
export function ServerError(err : any ,req : Request , res : Response , next : NextFunction) : void {
    const error : SeverError = {
        error_type : "Server Error",
        status :  500 ,
        message : err?.message ?? "internal server error"
    }
    res.json(error)
    
    
};