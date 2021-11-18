import { Router } from "express";
const router = Router();

import * as authCrtl from "../controllers/auth.controller.js";

router.post("/signup", authCrtl.signUp);

router.post("/signin", authCrtl.signIn);

export default router;
