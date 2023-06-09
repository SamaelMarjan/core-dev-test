require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connection = require('./config/db')
const emailRoute = require('./routes/emailRoute')

const app = express()
connection()

app.use(cors())
app.use(express.json())

app.use('/', emailRoute)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server connected to port ${PORT}`))