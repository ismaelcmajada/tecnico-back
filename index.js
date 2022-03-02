const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
//Rutas
const authRoute = require('./routes/auth')
const equipoRoute = require('./routes/equipos')
const reparacionRoute = require('./routes/reparaciones')
const usuarioRoute = require('./routes/usuarios')

dotenv.config()

//Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => 
    console.log('Conectado a la BD!')
)

//Middleware
app.use(express.json())
const cors = require('cors');
app.use(cors(
    {credentials: true, origin: true}
));
app.use('/api/user', authRoute)
app.use('/api/equipos', equipoRoute)
app.use('/api/reparaciones', reparacionRoute)
app.use('/api/usuarios', usuarioRoute)


app.listen(3000, () => console.log('Servidor corriendo'))