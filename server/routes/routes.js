const express = require('express')
const {register, signinUser, } = require('../controller/authController')


const router = express.Router();

router.post('/register', register)
router.post('/signin', signinUser)

module.exports = router;