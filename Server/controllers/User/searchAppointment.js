import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Appointment } from '../../models/Appointment.js'
import mongoose from 'mongoose'

const searchAppointment = async (req, res) => {
  try {
    console.log('searcihng')
    if (!mongoose.isValidObjectId(req.query.query))
      return sendError('Invalid Appointment ID', 400, res)

    if (req.query.query === undefined)
      return sendError('Missing required parameters', 404, res)

    const { query } = req.query
    console.log(query)

    const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

    const appointment = await Appointment.findById(escapedQuery)

    if (!appointment) return sendError('Appointment not found', 404, res)
    return sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default searchAppointment
