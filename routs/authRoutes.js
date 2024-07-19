
import { logIn, signUp } from "../controllers/authcontrollers.js";
import express from "express";
const authrouts = express.Router();
authrouts.post('/logIn', logIn);
authrouts.post('/signUp', signUp);
export default authrouts;