const express = require('express');
const verify = require('./verifyToken')
const ReparacionController = require('../controllers/ReparacionController');

const router = express.Router();

router.get('/', verify, ReparacionController.list)
      .post('/', verify, ReparacionController.create)
      .get('/:id', verify, ReparacionController.find)
      .put('/:id', verify, ReparacionController.update)
      .delete('/:id', verify, ReparacionController.deleted)

module.exports = router;