var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');





router.get('/', indexController.index);
router.get('/resultados', indexController.resultados);


module.exports = router;

