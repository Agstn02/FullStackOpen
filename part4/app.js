const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const blogsRoute = require('./controlers/blogs')
const config = require('./config/config')

mongoose.connect(config.MONGO_URI)

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRoute)


module.exports = app