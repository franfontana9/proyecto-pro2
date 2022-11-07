var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteoController');






router.get('/agregarPosteo', posteoController.agregarPosteo);
router.get('/detallePosteo/:id', posteoController.detallePosteo);


module.exports = router;
