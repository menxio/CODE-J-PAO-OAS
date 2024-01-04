import { Router } from "express";
import viewAppointment from "../controllers/Employee/viewAppointment.js";
import searchAppointment from "../controllers/Employee/searchAppointment.js";
import reschedAppointment from "../controllers/Employee/reschedAppointment.js";
import cancelAppointment from "../controllers/Employee/cancelAppointment.js";
import viewAllAppointments from "../controllers/Employee/viewAllAppointments.js";

const router = Router()

router.get('/appointment/:id', viewAppointment) //test
router.get('/appointments', viewAllAppointments) //test
router.get('/appointments/search', searchAppointment) //test
router.patch('/appointment/:id/resched', reschedAppointment) //test
router.patch('/appointment/:id/cancel', cancelAppointment) //test

export default router