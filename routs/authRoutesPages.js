import express from "express";
import { loginpage, signuppage } from "../controllers/authpagescontroller.js";
const pageroutes = express.Router();
pageroutes.get('/logIn', loginpage);
pageroutes.get('/signUp', signuppage);
export default pageroutes;

