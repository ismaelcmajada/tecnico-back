const express = require('express');
const verify = require('./verifyToken')
const EquipoController = require('../controllers/EquipoController');

const router = express.Router();

router.get('/', verify, EquipoController.list)
      .post('/', verify, EquipoController.create)
      .get('/:id', verify, EquipoController.find)
      .put('/:id', verify, EquipoController.update)
      .delete('/:id', verify, EquipoController.deleted)

module.exports = router;