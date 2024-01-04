import { Router } from 'express'
import viewAppointment from '../controllers/User/viewAppointment.js';
import searchAppointment from '../controllers/User/searchAppointment.js';
import createAppointment from '../controllers/User/createAppointment.js';
import cancelAppointment from "../controllers/User/cancelAppointment.js";
const router = Router()

router.post('/appointment/create', createAppointment)
router.get('/appointment/:id', viewAppointment)
router.get('/appointments/search', searchAppointment)
router.patch('/appointment/:id/cancel', cancelAppointment)

export default router
