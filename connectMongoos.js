import mongoose from "mongoose";

function connectDB(url) {
    return mongoose.connect(url).then(data => console.log("Database connected...")).catch(err => console.log(`Error in connecting Database...${err}`));
}
export default connectDB;