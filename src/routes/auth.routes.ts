import { Router } from "express";
import { Login, Register } from "../controller/auth.controller";

export const AuthRouter : Router = Router();

AuthRouter.post("/Login" , Login);
AuthRouter.post("/Register" , Register);


