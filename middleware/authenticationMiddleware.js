import jwt from "jsonwebtoken";
import { secretKey } from "../constents/content.js";
function verifytokens(req, res, next) {
    const token = req.headers.authorization;
    if (token) {

        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    status: "Error",
                    msg: "Invalid Token", // More descriptive message
                });
            }
            if (!decoded) {
                return res.status(401).json({
                    status: "Error",
                    msg: "Unauthorized Access",
                });
            }
            next();
        });
    } else {
        return res.status(400).json(
            {
                status: "Error",
                msg: "First Login"
            });
    }

}
export default verifytokens;