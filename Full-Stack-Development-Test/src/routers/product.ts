import { Router, Request, Response } from "express";
import {
  Create,
  Update,
  Delete,
  Read,
  ReadId,
} from "../controller/productController";
import { validateToken } from "../libs/validateToken";

const router: Router = Router();

router.get("/", Read);
router.get("/:id", validateToken, ReadId);
router.post("/Create", validateToken, Create);
router.put("/Update/:id", validateToken, Update);
router.delete("/Delete/:id", validateToken, Delete);

export default router; // export router
