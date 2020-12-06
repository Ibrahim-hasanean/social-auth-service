const express = require("express");
const router = express.Router();
const User = require("../models/user")
const { signUp, verify, login } = require("../controller/index");
const { facebookLogin, googleLogin } = require("../controller/socialLogin");

require("dotenv").config();

router.post("/facebooklogin", facebookLogin);
router.post("/googlelogin", googleLogin);
module.exports = router;
