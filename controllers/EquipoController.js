const Equipo = require('../model/Equipo');
const Reparacion = require('../model/Reparacion');

function list(req, res) {
    Equipo.find({}, function (err, equipos) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json ({
                equipos: equipos
            })
        }
    })
}

function create(req, res) {
    let equipo = new Equipo(req.body);
    Equipo.create(equipo, function (err, newEquipo) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(201).json({
                equipo: newEquipo
            })
        }
    })
}

function update(req, res) {
    let id = req.params.id
    let equipo = {
        _id: id,
        nombre: req.body.nombre,
        procesador: req.body.procesador,
        ram: req.body.ram,
        almacenamiento: req.body.almacenamiento,
        fechaCompra: req.body.fechaCompra
        
    }
    Equipo.findByIdAndUpdate(id, equipo, function (err) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json({
                equipo: equipo
            })
        }
    })
}

function deleted(req, res) {
    let id = req.params.id
    Reparacion.find({equipo_id: id}).remove().exec()
    Equipo.findByIdAndDelete(id, function(err) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(204).send()
        }
    })
}

function find(req, res) {
    let id = req.params.id
    Equipo.findById(id, function (err, equipo) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json({
                equipo: equipo
            })
        }
    })
}

module.exports = {
    list,
    create,
    update,
    deleted,
    find,
}