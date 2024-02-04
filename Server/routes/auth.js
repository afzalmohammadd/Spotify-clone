const express = require("express")
const authRoute = require("../controllers/auth.js")

const router = express.Router()

router.post("/signup",authRoute)
router.post("/login",authRoute)


module.exports = router;