"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const router = (0, express_1.Router)();
router.post("/Login", authController_1.Login);
router.post("/Register", authController_1.Register);
router.get("/Index", authController_1.Index);
/* router.get('/Logout', Logout);// */
exports.default = router; // export router
