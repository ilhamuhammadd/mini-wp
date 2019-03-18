const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()


class UserController {

    static signup(req,res) {
        console.log(req.body, 'masuk statci signup')
        const { body } = req
        let obj = {
            username: body.username,
            email: body.email,
            password: body.password
        }

        User.create(obj)
            .then(user=>{
                res.status(201).json(user)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }

    static signin(req, res) {
        const {body} = req

        User.findOne({
            email: body.email
        })
        .then(user=>{
            // console.log(user)
            const isMatch = bcrypt.compareSync(body.password, user.password)
            if (isMatch) {
                let payload = {
                    email: user.email
                }

                const token = jwt.sign(payload, process.env.SECRET_KEY)

                res.status(200).json({
                    token: token
                })
            } else {
                res.status(500).json({
                    message: 'Username/Password invalid'
                })
            }

        })
        .catch(err=>{
            res.status(500).json(err)
        })
    }


}


module.exports = UserController