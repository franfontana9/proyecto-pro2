const data = require("../data/index");



const userController = {
  detalleUsuario: function (req, res) {
    res.render('detalleUsuario');
  },

  editarPerfil: function (req, res) {
    res.render('editarPerfil',{info: data.usuarios, personal: req.params.id });
  },
  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    res.render('miPerfil', {info: data.usuarios[0], posteos: data.posteos});
  },
  registracion: function (req, res) {
    res.render('registracion');
  },
}







module.exports = userController;