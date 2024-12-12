import express from "express";
import { createMenuItem, getMenuItem, updateMenuItem } from "../controllers/menuItem.controller.js";

const router = express.Router();

router.post("/create/:id", createMenuItem);
router.get("/get/:id", getMenuItem);
router.put("/update/:id", updateMenuItem);

export default router;
