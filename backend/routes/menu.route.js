import express from 'express'
import { createMenu, getMenus,getMenu } from '../controllers/menu.controller.js'

const router = express.Router()

router.post("/create", createMenu)
router.get("/get", getMenus)
router.get('/get/:id',getMenu)

export default router