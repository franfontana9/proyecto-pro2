var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteoController');
const multer = require('multer')
const path = require('path')

let storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, path.join(__dirname, '../public/img/post'));
  },
  filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
              /* imgPerfil-456456456456456.png  */             
  }
});

let upload = multer({storage: storage});


router.get('/agregarPosteo', posteoController.agregarPosteo);
router.post('/crearPosteo', upload.single('image'), posteoController.crearPosteo);
router.get('/detallePosteo/:id', posteoController.detallePosteo);
router.post('/agregarComentario/:id', posteoController.agregarComentario);
router.get('/eliminarPosteo/:id', posteoController.eliminarPosteo);
router.get('/editarPosteo/:id', posteoController.editarPosteo);
router.post('/actualizarPosteo/:id', upload.single('image'), posteoController.actualizarPosteo);

module.exports = router;