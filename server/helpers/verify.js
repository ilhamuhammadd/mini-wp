const jwt = require('jsonwebtoken')

function verify(token) {
    return jwt.verify(token, 'SECRET')
}

module.exports = verify