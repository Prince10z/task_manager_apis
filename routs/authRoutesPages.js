import express from "express";
import { loginpage, signuppage } from "../controllers/authpagescontroller.js";
const pageroutes = express.Router();
pageroutes.post('/logIn', loginpage);
pageroutes.post('/signUp', signuppage);
export default pageroutes;

