import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { Admin } from '../models/Admin.js';

passport.use(new LocalStrategy(Admin.authenticate()));
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());

export default passport;