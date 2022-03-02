const mongoose = require('mongoose')

const equipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    procesador: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    ram: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    almacenamiento: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    fechaCompra: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Equipo', equipoSchema)