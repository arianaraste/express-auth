import { Router } from "express";
import { Login, Register } from "../controller/auth.controller";
import { checkAuth } from "../middleware/checkAuth";
import { getprofile } from "../controller/profile.controller";

export const ProfileRouter : Router = Router();

ProfileRouter.get("/profile" , getprofile );




