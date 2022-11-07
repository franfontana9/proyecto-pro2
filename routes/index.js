var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');




const db = require('../database/models');
const Usuario = require('../database/models/Usuario');
router.get('/', indexController.index);
router.get('/resultados', indexController.resultados);
router.get('/prueba', async(req,res)=>{
res.send(await db.Usuario.findAll())
});


module.exports = router;

