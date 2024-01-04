import sendError from '../../utils/sendError.js'
import sendSuccess from '../../utils/sendSuccess.js'
import { Appointment } from '../../models/Appointment.js'

const createAppointment = async (req, res) => {
  console.log(req.body)
  try {
    if (
      req.body.email === undefined ||
      req.body.purpose === undefined ||
      req.body.type === undefined ||
      req.body.date === undefined ||
      req.body.firstName === undefined ||
      req.body.lastName === undefined ||
      req.body.age === undefined ||
      req.body.gender === undefined ||
      req.body.address === undefined ||
      req.body.mobileNo === undefined
    )
      return sendError('Missing Required Parameters', 404, res)

    let appointment

    appointment = await Appointment.findOne({
      'formData.date': new Date(req.body?.date),
    })
    if (appointment) {
      return sendError('Date schedule conflict', 400, res)
    }

    const formData = {
      purpose: req.body.purpose,
      type: req.body.type,
      date: new Date(req.body.date),
      firstName: req.body.firstName,
      middleName: req.body.middleName,
      lastName: req.body.lastName,
      gender: req.body.gender,
      age: req.body.age,
      address: req.body.address,
      email: req.body.email,
      mobileNo: req.body.mobileNo,
    }

    appointment = await Appointment.create({
      dateOfCreation: Date.now(),
      formData: formData,
      status: 'Pending',
    })

    return sendSuccess(appointment, 200, res)
  } catch (error) {
    console.log(error)
    return sendError('Internal Server Error', 500, res)
  }
}

export default createAppointment
