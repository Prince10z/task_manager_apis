import mongoose from "mongoose";
const taskschema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    taskid: {
        type: String, // Consider using a unique identifier library like Mongoose ObjectId
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: false,
    },
    done: {
        type: Boolean,
        required: true,
    },
    endtime: {
        type: Date,
        required: true,
    },
}, { timestamps: true });
const taskmodel = mongoose.model("taskModel", taskschema);
export default taskmodel;