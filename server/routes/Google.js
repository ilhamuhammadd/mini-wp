const router = require('express').Router()
const GoogleController = require('../controllers/GoogleController')

router.post('/tokensignin', GoogleController.signin)

module.exports = router