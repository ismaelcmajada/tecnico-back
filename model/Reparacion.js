const mongoose = require('mongoose')

const reparacionSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    completada: {
        type: Boolean,
        default: false
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    equipo_id: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Equipo',
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Reparacion', reparacionSchema)