var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteoController');






router.get('/agregarPost', posteoController.agregarPost);
router.get('/detallePost', posteoController.detallePost);


module.exports = router;
