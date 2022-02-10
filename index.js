const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//Rutas
const authRoute = require('./routes/auth')
const storeRoute = require('./routes/stores')

dotenv.config()

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('Conectado a la BD!')
)

//Middleware
app.use(express.json())
app.use('/api/user', authRoute)
app.use('/api/stores', storeRoute)

app.listen(3000, () => console.log('Servidor corriendo'))