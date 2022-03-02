const Usuario = require('../model/User');
const Reparacion = require('../model/Reparacion');

function list(req, res) {
    Usuario.find({}, function (err, usuarios) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json ({
                usuarios: usuarios
            })
        }
    })
}

function find(req, res) {
    let id = req.params.id
    Usuario.findById(id, function (err, usuario) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json({
                usuario: usuario
            })
        }
    })
}

function deleted(req, res) {
    let id = req.params.id
    Reparacion.find({user_id: id}).remove().exec()
    Usuario.findByIdAndDelete(id, function(err) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(204).send()
        }
    })
}

module.exports = {
    list,
    find,
    deleted
}