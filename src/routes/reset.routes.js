import { Router } from "express";
const router = Router();

import * as passwordCrtl from "../controllers/password.controller.js";

router.post("/forgot-password", passwordCrtl.forgot);

router.post("/reset-password/:id/:token", passwordCrtl.resetpost);

router.get("/reset-password/:id/:token", passwordCrtl.reset);

export default router;
