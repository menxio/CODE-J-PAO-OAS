import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Employee } from '../../models/Employee.js'
import bcrypt from 'bcrypt'
import mongoose from 'mongoose'

const editEmployee = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id))
      return sendError('Invalid Object ID', 400, res)
    if (
      req.body.old_password === undefined ||
      (req.body.new_password === undefined &&
        req.body.username === undefined &&
        req.body.fullName === undefined)
    )
      return sendError('Missing Required Parameters', 404, res)

    let employee
    employee = await Employee.findById(req.params.id)

    if (!employee) return sendError('user not found', 404, res)

    if (!(await bcrypt.compare(req.body.old_password, employee.password)))
      return sendError('Password Incorrect', 400, res)

    const { username, password, fullName } = req.body

    if (username) employee.username = username
    if (password) {
      const hashedPass = await bcrypt.hash(password, 10)
      employee.password = hashedPass
    }
    if (fullName) employee.fullName = fullName

    await employee.save()

    return sendSuccess(employee, 200, res)
  } catch (error) {
    console.log(error)
    return sendError('Internal Server Error', 500, res)
  }
}

export default editEmployee
