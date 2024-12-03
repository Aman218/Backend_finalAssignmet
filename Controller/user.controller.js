import { user_model } from "../Model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function userRegistration(req, res) {
    const { name, email, password } = req.body;

    user_model.findOne({ email }).then((data) => {
        if (data) {
            return res.status(403).send({ "Message": "User already exist" })
        }
        const new_user = new user_model({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        });
        new_user.save().then((data) => {
            res.status(200).send({ message: data })
        }).catch((err) => {
            res.status(500).send({ message: err.message })
        })
    })


}
export function userLogin(req, res) {
    const { email, password } = req.body;
    user_model.findOne({ email }).then((data) => {
        if (!data) {
            return res.status(404).send({message:"User doesn't exist,Please Register"});
        }
        let valid_password = bcrypt.compareSync(password, data.password);
        if (!valid_password) {
            return res.status(403).send({ "message": "Invalid password" })
        }

        let token = jwt.sign({ id: data._id }, "secretkey", { expiresIn: "100y" });
        res.send({
           message:"Logged in successfully",
            user: {
                name: data.name,
                email: data.email
            },

            access_token: token
        })

    })
}