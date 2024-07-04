const express = require("express");

const router = express.Router();

const authControllers= require("../controllers/auth-controller")
const schema = require('../validators/auth-validator')
const validate = require('../middlewares/validate-middleware')

router.route("/").get(authControllers.home)
router.route("/register").post(validate(schema.signupSchema),authControllers.register)
router.route("/login").post(validate(schema.loginSchema),authControllers.login)


module.exports = router