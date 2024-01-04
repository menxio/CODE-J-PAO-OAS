import mongoose from 'mongoose'
const Schema = mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose'

const appointmentSchema = new Schema({
  dateOfCreation: { type: Date, required: true },
  formData: {
    purpose: { type: String },
    type: { type: String },
    date: { type: Date, required: true },
    firstName: { type: String },
    middleName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    age: { type: Number },
    address: { type: String },
    email: { type: String, required: true },
    mobileNo: { type: Number },
  },
  status: { type: String },
})

appointmentSchema.plugin(passportLocalMongoose)

export const Appointment = mongoose.model('Appointment', appointmentSchema)
