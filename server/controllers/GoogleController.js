const { OAuth2Client } = require('google-auth-library')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const client = new OAuth2Client(process.env.GOOGLE_OAUTH)
const compareToken = require('../helpers/tokenCompare')

class GoogleController {

    static signin(req, res, next) {
        console.log('masok ke google controller')
        console.log(req.body.token)
        if (req.body.idtoken === null) {
            console.log('Invalid Token')
        } else {
            client.verifyIdToken({
                idToken: req.body.token,
                audience: process.env.process.env.GOOGLE_OAUTH
            })
            .then(ticket=>{
                const { email, name, picture } = ticket.getPayload()
                const accesToken = jwt.sign({ email }, process.env.SECRET_KEY)
                // res.status(200).json({email, name, picture, accessToken})
                res.status(200).json({accesToken})
                // console.log(accesToken)
                const isMatch = compareToken(accesToken)
                if (isMatch) {
                    return User.findOne({
                        email: isMatch.email
                    })
                    .then(user=>{
                        if (user === null) {
                            // console.log(isMatch.email)
                            return User.create({email: isMatch.email, password: process.env.PASSWORD, username: 'hambaAllah'})
                        } else if (user) {
                            // console.log(user, 'user nya sudah ada')
                        }
                    })
                    .then(newuser=>{
                        // console.log(newuser, 'return create new user')
                        // res
                    })
                } 
            })
            .catch(err=>{
                console.log('masok error')
                res.status(500).json(err)
            })

        }
    }
}

module.exports = GoogleController