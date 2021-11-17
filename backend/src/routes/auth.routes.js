import {Router} from 'express'
import * as authController from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

const router = Router()

router.post('/signup', verifySignup.checkDuplicatedUserOrEmail, authController.signUp)
router.post('/login', authController.login)

export default router;