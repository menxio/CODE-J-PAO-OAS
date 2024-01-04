import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Employee } from '../../models/Employee.js'

const searchEmployee = async (req, res) => {
  try {
    if (req.query.query === undefined)
      return sendError('Missing required parameters', 404, res)

    const { query } = req.query

    const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')

    const queryFilter = {
      $or: [
        { username: { $regex: escapedQuery, $options: 'i' } },
        { fullName: { $regex: escapedQuery, $options: 'i' } },
      ],
    }
    const employees = await Employee.find(queryFilter)

    return sendSuccess(employees, 200, res)
  } catch (error) {
    console.log(error)
    sendError('Internal Server Error', 500, res)
  }
}

export default searchEmployee
