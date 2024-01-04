import { Router } from 'express'
import adminLogin from '../controllers/Auth/adminLogin.js'
import employeeLogin from '../controllers/Auth/employeeLogin.js'
import logout from '../controllers/Auth/logout.js'
const router = Router()

router.post('/login/admin', adminLogin)
router.post('/login/employee', employeeLogin)
router.post('/logout', logout)

export default router
