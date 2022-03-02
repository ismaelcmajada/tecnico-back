const Usuario = require('../model/User');

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

module.exports = {
    list,
    find
}