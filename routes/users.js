var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/img/usuario'));
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
                /* imgPerfil-456456456456456.png  */             
    }
});

let upload = multer({storage: storage});


router.get('/login', userController.login);
router.get('/registracion', userController.registracion);
router.post('/registracion', upload.single('multer'), userController.store);
router.get('/detalleUsuario/:id', userController.detalleUsuario);
router.get('/editarPerfil', userController.editarPerfil);
router.post('/editarPerfil', upload.single('foto'), userController.actualizarPerfil);
router.get('/miPerfil/:id', userController.miPerfil);
router.post('/login', userController.singin);
router.get('/logout', userController.logout);
router.get('/seguir/:id', userController.seguir);
router.get('/dejarSeguir/:id', userController.dejarSeguir);


module.exports = router;