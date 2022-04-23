"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controller/productController");
const validateToken_1 = require("../libs/validateToken");
const router = (0, express_1.Router)();
router.get("/", productController_1.Read);
router.get("/:id", validateToken_1.validateToken, productController_1.ReadId);
router.post("/Create", validateToken_1.validateToken, productController_1.Create);
router.put("/Update/:id", validateToken_1.validateToken, productController_1.Update);
router.delete("/Delete/:id", validateToken_1.validateToken, productController_1.Delete);
exports.default = router; // export router
