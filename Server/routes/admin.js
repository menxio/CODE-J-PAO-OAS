import { Router } from "express";
import deleteEmployee from "../controllers/Admin/deleteEmployee.js";
import editEmployee from "../controllers/Admin/editEmployee.js";
import registerEmployee from "../controllers/Admin/registerEmployee.js";
import searchEmployee from "../controllers/Admin/searchEmployee.js";
import viewAppointment from "../controllers/Admin/viewAppointment.js";
import searchAppointment from "../controllers/Admin/searchAppointment.js";
import reschedAppointment from "../controllers/Admin/reschedAppointment.js";
import cancelAppointment from "../controllers/Admin/cancelAppointment.js";
import deleteAppointment from "../controllers/Admin/deleteAppointment.js";
import getEmployees from "../controllers/Admin/getEmployees.js";
import viewAllAppointments from '../controllers/Admin/viewAllAppointments.js'

const router = Router()

router.post('/employee/register', registerEmployee)
router.get('/employees', getEmployees)
router.get('/employees/search', searchEmployee)
router.patch('/employee/:id/edit', editEmployee)
router.delete('/employee/:id/delete', deleteEmployee)

router.get('/appointment/:id', viewAppointment)
router.get('/appointments', viewAllAppointments)
router.get('/appointments/search', searchAppointment)
router.patch('/appointment/:id/resched', reschedAppointment) //test
router.patch('/appointment/:id/cancel', cancelAppointment)
router.delete('/appointment/:id/delete', deleteAppointment)

export default router