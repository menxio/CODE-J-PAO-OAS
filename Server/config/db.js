import mongoose from "mongoose";
import { Admin } from '../models/Admin.js';
import { Appointment } from '../models/Appointment.js';
import { Employee } from '../models/Employee.js';
import dotenv from 'dotenv'

// Connection URI.
dotenv.config()
const dbURI = process.env.DB_URI

// MongoDB Database
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'pao-oas'
});

// Connection event
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
});

// Error event
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

// Disconnection event
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Closing mongoose connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});