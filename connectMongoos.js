import mongoose from "mongoose";

function connectDB(url) {
    return mongoose.connect(url).then(data => console.log("Connecting Database...")).catch(err => console.log("Error in connecting Database..."));
}
export default connectDB;