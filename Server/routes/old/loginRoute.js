import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs';

const loginRouter = express.Router();
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '..');

loginRouter.get('/', (req, res) => {
    fs.readFile(__dirname + '/views/index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.send(data);
      }
    });
  });
  
  // Define route for processing login form submission
  loginRouter.post('/', (req, res) => {
    const { username, password } = req.body;
  
    // Authenticate the admin user securely (replace this with your authentication logic)
    if (authenticateAdmin(username, password)) {
      req.session.isAdmin = true;
      res.redirect('/dashboard');
    } else {
      res.redirect('/');
    }
  });
  
  // Define route for the admin dashboard
  loginRouter.get('/dashboard', (req, res) => {
    if (req.session.isAdmin) {
      // Render the admin dashboard HTML template (create a separate HTML file)
      fs.readFile(__dirname + '../views/dashboard.html', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal Server Error');
        } else {
          res.send(data);
        }
      });
    } else {
      res.redirect('/');
    }
  });

  
  export default loginRouter;
  