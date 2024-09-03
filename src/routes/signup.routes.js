const express = require("express")
const router = express.Router()
const {authenticate} = require("../middleware/auth")


const {
  userSignup,
  userLogin,
  forgotPassword,
  resetPassword
} = require("../controllers/signup.controllers")


router.post("/signup", userSignup)
router.post("/signin", userLogin )
router.post("/forgotpassword", authenticate, forgotPassword)
router.post('/reset-password', authenticate, resetPassword);

module.exports = router
