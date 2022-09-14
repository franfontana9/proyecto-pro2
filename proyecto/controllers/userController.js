const data = require("../data/index");



const userController = {
  detalleUsuario: function (req, res) {
    res.render('detalleUsuario');
  },

  editarPerfil: function (req, res) {
    res.render('editarPerfil');
  },
  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    res.render('miPerfil', {info: data.usuario[0]});
  },
  registracion: function (req, res) {
    res.render('registracion');
  },
}







module.exports = userController;