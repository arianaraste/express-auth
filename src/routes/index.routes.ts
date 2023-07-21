import { Router } from "express";
import  {AuthRouter}  from "./auth.routes";
import { ProfileRouter } from "./profile.routes";
import { checkAuth } from "../middleware/checkAuth";

export const router : Router = Router()

router.use("/Auth" , AuthRouter )
router.use("/user" , checkAuth ,ProfileRouter )
