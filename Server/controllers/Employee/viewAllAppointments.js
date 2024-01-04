import { Appointment } from '../../models/Appointment.js'
import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'

const viewAllAppointments = async (req, res) => {
  try {
    if (req.query.entries === undefined)
      return sendError('Missing required Parameters', 404, res)

    const appointment = await Appointment.find()
      .sort({ dateOfCreation: -1 })
      .limit(req.query.entries)

    sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default viewAllAppointments
