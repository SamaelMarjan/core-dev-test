const { sendMail } = require('../controllers/emailController')

const router = require('express').Router()

router.post('/sendemail', sendMail)

module.exports = router