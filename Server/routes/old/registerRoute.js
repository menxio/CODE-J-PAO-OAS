import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
import { Admin } from '../../models/Admin.js';

const registerRouter = express.Router();
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '..');


registerRouter.get('/', (req, res) => {
    fs.readFile(__dirname + '/views/register.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.send(data);
      }
    });
  });

registerRouter.post('/', async (req, res) => {
  const { adminUsername, adminPassword, isAdmin } = req.body;

  if (adminUsername !== 'admin' || adminPassword !== 'admin123') {
    return res.status(401).send('Invalid admin credentials.');
  }

  try {
    
    const existingAdmin = await Admin.findOne({ username: adminUsername });
    if (existingAdmin) {
      return res.status(400).send('Username is already taken. Please choose another.');
    }

   
    const newAdmin = new Admin({
      username: adminUsername,
      password: adminPassword,
      isAdmin: Boolean(isAdmin),
    });

    await newAdmin.save();

    console.log(`Admin registered: ${adminUsername}, isAdmin: ${isAdmin === 'on'}`);
    res.redirect('/');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
});
  


  export default registerRouter;