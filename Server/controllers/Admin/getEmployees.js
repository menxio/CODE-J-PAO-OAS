import { Employee } from '../../models/Employee.js'
import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'

const getEmployees = async (req, res) => {
  try {
    if (req.query.entries === undefined)
      return sendError('Missing required Parameters', 404, res)

    const employees = await Employee.find()
      .sort({ dateOfRegistration: -1 })
      .select('-password')
      .limit(req.body.entries)

    sendSuccess(employees, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default getEmployees
