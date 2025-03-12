const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const blogsRoute = require('./controlers/blogs')
require('dotenv').config()



const mongoUrl = process.env.MONGO_URI
mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRoute)


module.exports = app