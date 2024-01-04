import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Employee } from '../../models/Employee.js'
import mongoose from 'mongoose'

const deleteEmployee = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return sendError('Invalid Object ID', 400, res)
    
    const employee = await Employee.findById(req.params.id).select('-password')
    if (!employee) return sendError('Employee not found', 404, res)

    const payload = employee
    await employee.deleteOne()

    sendSuccess(payload, 200, res)
  } catch (error) {
    console.log(error)
    return sendError('Internal Server Error', 500, res)
  }
}

export default deleteEmployee
