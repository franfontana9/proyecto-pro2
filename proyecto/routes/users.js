var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');





router.get('/editarPerfil', userController.editarPerfil);
router.get('/login', userController.login);
router.get('/miPerfil', userController.miPerfil);
router.get('/registracion', userController.registracion);


router.get('/detalleUsuario', userController.detalleUsuario);




module.exports = router;




