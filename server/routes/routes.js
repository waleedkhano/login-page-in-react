const express = require('express')
const {register, signinUser, logout} = require('../controller/authController');


const router = express.Router();

router.post('/register', register)
router.post('/signin', signinUser)
router.post('/logout', logout)

module.exports = router;