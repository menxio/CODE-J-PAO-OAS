import express from 'express';
import session from "express-session";
import bodyParser from 'body-parser';
import passport from '../../config/passport.js';
import fs from 'fs';

const router = express.Router();

router.use(session({ 
  secret: 'code_j#2023', 
  resave: false, 
  saveUninitialized: false 
}));
router.use(passport.initialize());
router.use(passport.session());

// Define your authentication routes here

router.use(bodyParser.urlencoded({ extended: true }));

// Admin login credentials (replace with your actual credentials)
const username = 'admin';
const password = 'password';

// Serve the login form
router.get('/login', (req, res) => {
  fs.readFile(__dirname + '/../public/login.html', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Process login form submission
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === adminUsername && password === adminPassword) {
    req.session.isAdmin = true;
    res.redirect('/admin/dashboard');
  } else {
    res.redirect('/login');
  }
});

// Admin dashboard (accessible only if logged in)
router.get('/admin/dashboard', (req, res) => {
  if (req.session.isAdmin) {
    res.send('Welcome to the Admin Dashboard!');
  } else {
    res.redirect('/login');
  }
});

export default router;