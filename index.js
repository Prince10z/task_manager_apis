import express, { urlencoded } from "express";
const app = express();
const PORT = 8081;
import connectDB from "./connectMongoos.js";
import authrouts from "./routs/authRoutes.js";
import pageroutes from "./routs/authRoutesPages.js";
import taskrouts from "./routs/taskmanagerRoutes.js";
import verifytokens from "./middleware/authenticationMiddleware.js";
connectDB("mongodb://127.0.0.1:27017/taskmanager");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/pages", pageroutes);
app.use("/auth", authrouts);
app.use("/task", verifytokens, taskrouts);
app.listen(PORT, () => {
    console.log(`Starting Server at port: ${PORT}...`);
})