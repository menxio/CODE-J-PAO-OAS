import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Appointment } from '../../models/Appointment.js'

const searchAppointment = async (req, res) => {
  try {
    if (req.query.query === undefined)
      return sendError('Missing required parameters', 404, res)

    const { query } = req.query

    const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

    const queryFilter = {
      $or: [
        { email: { $regex: escapedQuery, $options: 'i' } },
        { status: { $regex: escapedQuery, $options: 'i' } },
        { 'formData.purpose': { $regex: escapedQuery, $options: 'i' } },
        { 'formData.type': { $regex: escapedQuery, $options: 'i' } },
        // { 'formData.date': { $regex: escapedQuery, $lte: new Date(escapedQuery) } },
      ],
    }
    const appointment = await Appointment.find(queryFilter)

    return sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default searchAppointment
