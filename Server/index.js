require("dotenv").config()
require("express-async-errors")
const express = require('express');
const cors = require("cors")
const cookieParser = require("cookie-parser")
const connectDB = require('./Connection/database')
const authRoutes = require("./routes/auth");
const app = express()

connectDB().catch(err => console.log(err));

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/auth", authRoutes)

const port = process.env.PORT || 7000;
app.listen(port, console.log(`Listening on port${port}`))