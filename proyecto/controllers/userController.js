const data = require("../data/index");



const userController = {
  detalleUsuario: function (req, res) {
    let usuario = data.usuarios.find(usuario=>usuario.id==req.params.id)
    let posteos = data.posteos.filter(posteo=>posteo.id_usuario==usuario.id)
    console.log (usuario)
    res.render('detalleUsuario',{usuario:usuario, posteos:posteos});
  },

  editarPerfil: function (req, res) {
    res.render('editarPerfil',{info: data.usuarios, personal: req.params.id});
  },
  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    let usuario = data.usuarios.find(usuario=>usuario.id==req.params.id)
    let posteos = data.posteos.filter(posteo=>posteo.id_usuario==usuario.id)
    res.render('miPerfil', {usuario:usuario, posteos:posteos});
  },
  registracion: function (req, res) {
    res.render('registracion');
  },
}







module.exports = userController;