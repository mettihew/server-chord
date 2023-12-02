const express = require('express')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const pageRoute = require('./routes/pageRoute')
const cors = require('cors')
require('dotenv').config()
console.log(require('dotenv').config())

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/user', userRoute)
app.use('/page', pageRoute)

mongoose
   .connect(process.env.mongodb_url)
   .then(() => console.log('Connected to mongoDB'))
   .catch((err) => () => console.log(err))


app.listen(4000, () => console.log('Connected to 4000'))
