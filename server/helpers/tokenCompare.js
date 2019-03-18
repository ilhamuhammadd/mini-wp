const jwt = require('jsonwebtoken')
require('dotenv').config()

function compareToken(token) {
     return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = compareToken