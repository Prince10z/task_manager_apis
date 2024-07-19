import authmodel from "../model/authmodels.js";
import jwt from "jsonwebtoken";
import { secretKey } from "../constents/content.js";
function generateUniqueId() {
    const timestamp = Date.now();
    const randomPart = Math.floor(Math.random() * 10000); // Random number between 0 and 9999
    return `${timestamp}-${randomPart}`;
}

export async function logIn(req, res) {
    const { email, password } = req.body;
    const user = await authmodel.findOne({
        email: email,
        password: password
    });
    if (user) {
        const payload = {
            email: email,
            password: password
        }
        const token = jwt.sign(payload, secretKey, { expiresIn: "7d" }); //set token valid for 7 days
        return res.status(200).json({
            status: "Success",
            token: token,
            uid: user.uid,
        });
    } else {
        return res.status(401).json({
            status: "Error",
            msg: "First create an account"
        });

    }

}
export async function signUp(req, res) {
    const { email, confirmpassword, password } = req.body;
    if (confirmpassword === password) {
        const user = await authmodel.findOne({
            email: email,
        });
        if (user) {
            return res.status(401).json({
                status: "Error",
                msg: "User already exist"
            });
        } else {
            const uidcreated = generateUniqueId();
            await authmodel.create({
                uid: uidcreated,
                email: email,
                password: password
            })
            return res.status(201).json({
                status: "Success",
                msg: "Account created"
            })
        }
    } else {
        return res.status(403).json({
            status: "Error",
            msg: "password do not match"
        })
    }
}