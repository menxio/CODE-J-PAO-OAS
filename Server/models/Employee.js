import mongoose from 'mongoose'
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfRegistration: { type: Date, required: true },
})

export const Employee = mongoose.model('Employee', EmployeeSchema)
