import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});


export const Admin = mongoose.model('Admin', adminSchema);