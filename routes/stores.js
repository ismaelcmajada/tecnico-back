const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req, res) => {
    res.json({
        stores: {
            title: 'PCBox Puerto del Rosario', 
            description: 'Tienda de informática y reparación de equipos.'
        }
    })
})

module.exports = router;