const Reparacion = require('../model/Reparacion');

function list(req, res) {
    Reparacion.find({}).populate({
        path: 'equipo_id',
        select:'nombre',
    }).populate({
        path: 'user_id',
        select:'name',
    }).exec(function (err, reparaciones) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json ({
                reparaciones: reparaciones
            })
        }
    })
}

function create(req, res) {
    let reparacion = new Reparacion(req.body);
    Reparacion.create(reparacion, function (err, newReparacion) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(201).json({
                reparacion: newReparacion
            })
        }
    })
}

function update(req, res) {
    let id = req.params.id
    let reparacion = {
        _id: id,
        descripcion: req.body.descripcion,
        completada: req.body.completada,
        user_id: req.body.user_id,
        equipo_id: req.body.equipo_id,
        fechaCreacion: req.body.fechaCreacion
        
        
    }
    Reparacion.findByIdAndUpdate(id, reparacion, function (err) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json({
                reparacion: reparacion
            })
        }
    })
}

function deleted(req, res) {
    let id = req.params.id
    Reparacion.findByIdAndRemove(id, function(err) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(204).send()
        }
    })
}

function find(req, res) {
    let id = req.params.id
    Reparacion.findById(id, function (err, reparacion) {
        if (err) {
            res.status(500).send(err.message)
        } else {
            res.status(200).json({
                reparacion: reparacion
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