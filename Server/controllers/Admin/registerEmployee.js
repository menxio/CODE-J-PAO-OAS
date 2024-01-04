import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Employee } from '../../models/Employee.js'
import bcrypt from 'bcrypt'

const registerEmployee = async (req, res) => {
  try {
    if (
      req.body.username === undefined ||
      req.body.password === undefined ||
      req.body.fullName === undefined
    )
      return sendError('Missing Required Parameters', 404, res)

    let employee
    employee = await Employee.findOne({ username: req.body.username })

    if (employee) return sendError('username taken', 400, res)

    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    employee = await Employee.create({
      username: req.body.username,
      password: hashedPassword,
      fullName: req.body.fullName,
      dateOfRegistration: Date.now(),
    })

    return sendSuccess(employee, 200, res)
  } catch (error) {
    console.log(error)
    return sendError('Internal Server Error', 500, res)
  }
}

export default registerEmployee
