import express from 'express'
import { createMenuItem } from '../controllers/menuItem.controller.js'

const router = express.Router()

router.post('/create/:id', createMenuItem)

export default router