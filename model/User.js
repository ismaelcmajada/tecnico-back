const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 4,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    },
    admin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)