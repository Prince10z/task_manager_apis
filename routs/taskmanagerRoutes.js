import express from "express";
import { addtask, changetask, getTasks, taskcompletion, deletetask } from "../controllers/taskcontrollers.js";
const taskrouts = express.Router();
taskrouts.get('/showtasks', getTasks);
taskrouts.post('/addtask', addtask);
taskrouts.put("/changetask", changetask);
taskrouts.patch("/taskcompleted", taskcompletion);
taskrouts.delete("/deletetask", deletetask);
export default taskrouts;