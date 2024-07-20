import dotenv from 'dotenv';  // Import dotenv for environment variables
dotenv.config();;
import express, { urlencoded } from "express";
const app = express();
import connectDB from "./connectMongoos.js";
import authrouts from "./routs/authRoutes.js";
import pageroutes from "./routs/authRoutesPages.js";
import taskrouts from "./routs/taskmanagerRoutes.js";
import verifytokens from "./middleware/authenticationMiddleware.js";
connectDB(process.env.backendserver);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/pages", pageroutes);
app.use("/auth", authrouts);
app.use("/task", verifytokens, taskrouts);
app.listen(process.env.PORT, () => {
    console.log(`Starting Server at port: ${process.env.PORT}...`);
})