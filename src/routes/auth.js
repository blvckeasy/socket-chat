import express from 'express'
import authController from '../controllers/auth.js'
const router = express.Router()

router.post('/login', authController.LOGIN)
router.post('/register', authController.REGISTER)

export default router