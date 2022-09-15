var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');



router.get('/miPerfil', userController.miPerfil);


router.get('/login', userController.login);
router.get('/registracion', userController.registracion);


router.get('/detalleUsuario', userController.detalleUsuario);

router.get('/editarPerfil/:id', userController.editarPerfil);



module.exports = router;




