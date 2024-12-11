import express from 'express'
import { createMenu, getMenus } from '../controllers/menu.controller.js'

const router = express.Router()

router.post("/create", createMenu)
router.get("/get",getMenus)

export default router