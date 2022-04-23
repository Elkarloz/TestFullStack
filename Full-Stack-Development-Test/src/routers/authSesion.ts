import { Router, Request, Response } from "express";
import { Login, Index, Register } from "../controller/authController";
import { validateToken } from "../libs/validateToken";

const router: Router = Router();

router.post("/Login", Login);
router.post("/Register", Register);
router.get("/Index", Index);
/* router.get('/Logout', Logout);// */

export default router; // export router
