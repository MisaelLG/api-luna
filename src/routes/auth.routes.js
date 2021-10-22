import { Router } from "express";
const router = Router();

import * as authCrtl from "../controllers/auth.controller.js";

router.post("/signup", authCrtl.signUp);

router.post("/signin", authCrtl.signIn);

router.post("/forgot-password", authCrtl.forgotpassword);

export default router;
