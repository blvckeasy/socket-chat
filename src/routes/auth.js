import authController from '../controllers/auth.js' 
import fileUpload from 'express-fileupload'
import express from 'express'

const router = express.Router()

router.post('/login', authController.LOGIN)
router.post('/register', fileUpload({
  limits: { fileSize: 10 * 1024 * 1024 },
}), authController.REGISTER)

export default router