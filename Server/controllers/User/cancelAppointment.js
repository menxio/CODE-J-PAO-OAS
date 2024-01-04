import { Appointment } from '../../models/Appointment.js'
import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import mongoose from 'mongoose'

const cancelAppointment = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return sendError('Invalid Object ID', 400, res)
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) return sendError('Appointment not found', 404, res)

    if (appointment.status === 'Cancelled')
      return sendError('Appointment already cancelled', 400, res)

    appointment.status = 'Cancelled'
    await appointment.save()

    return sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    return sendError('Internal Server Error', 500, res)
  }
}

export default cancelAppointment
