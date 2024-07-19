import mongoose from "mongoose";
const authschema = new mongoose.Schema({
    uid: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate emails
        trim: true // Removes leading/trailing whitespace
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6, // Optional: Minimum password length requirement
    }
}, { timestamps: true });
const authmodel = mongoose.model("authModel", authschema);
export default authmodel;