const express = require('express');
const verify = require('./verifyToken')
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/', verify, UserController.list)
      .get('/:id', verify, UserController.find)

module.exports = router;