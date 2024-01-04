import { Appointment } from '../../models/Appointment.js'
import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import mongoose from 'mongoose'

const reschedAppointment = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return sendError('Invalid Object ID', 400, res)
    
    if (req.body.newDate === undefined)
      return sendError('Missing required Parameters', 404, res)

    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) return sendError('Appointment not found', 404, res)

    appointment.formData.date = new Date(req.body.newDate)

    sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default reschedAppointment
