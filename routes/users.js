var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');






router.get('/login', userController.login);
router.get('/registracion', userController.registracion);


router.get('/detalleUsuario/:id', userController.detalleUsuario);
router.get('/editarPerfil/:id', userController.editarPerfil);
router.get('/miPerfil/:id', userController.miPerfil);
router.post('/registracion', userController.registrar);




module.exports = router;




