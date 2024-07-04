const express = require('express')
const router = express.Router()
const contactForm = require("../controllers/contact-controller")

const contact = require('../validators/contact-validator')
const validate = require('../middlewares/validate-middleware')

router.route("/contact").post(validate(contact),contactForm)

module.exports = router