const db = require("../database/models");
const bcrypt = require('bcryptjs');
// const { localsName } = require("ejs");
let User = db.Usuario;



const userController = {
  detalleUsuario: function (req, res) {
    let usuario = data.usuarios.find(usuario => usuario.id == req.params.id)
    let posteos = data.posteos.filter(posteo => posteo.id_usuario == usuario.id)
    console.log(usuario)
    res.render('detalleUsuario', { usuario: usuario, posteos: posteos });
  },

  editarPerfil: function (req, res) {
    if (req.session.usuario) {
      return res.render('editarPerfil', { info: data.usuarios, personal: req.params.id });

    }else{
      res.redirect('/users/login')
    }
  },
  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    let usuario = data.usuarios.find(usuario => usuario.id == req.params.id)
    let posteos = data.posteos.filter(posteo => posteo.id_usuario == usuario.id)
    res.render('miPerfil', { usuario: usuario, posteos: posteos });
  },
  registracion: function (req, res) {
    res.render('registracion');
  },
  registrar: function (req, res) {
    db.Usuario.create({
      username: req.body.usuario,
      mail: req.body.mail,
      contrasenia: bcrypt.hashSync(req.body.password, 12),
      foto_perfil: "foto",
      fecha: req.body.fecha,
      dni: req.body.dni,
    })
      .then(
        () => { res.redirect('/') }
      )
  },
  singin: function (req, res) {
    db.Usuario.findOne({
      where: { mail: req.body.email }

    })
      .then(function (usuario) {
        console.log(usuario);
        if (usuario == null || !bcrypt.compareSync(req.body.password, usuario.contrasenia)) {
          res.locals.error = 'usuario invalido'
          return res.render('login');
        }
        req.session.usuario = usuario.dataValues;
        res.cookie('userId', usuario.id, {
          maxAge: 1000 * 60 * 60
        })
        res.redirect('/')
      })
  },
  logout: function (req, res) {
      req.session.destroy(),
      res.clearCookie('userId')
      res.redirect('/users/login')
  },
  store: (req, res) => {
        
    let usuarioAGuardar = req.body;
    let imgPefil = req.file.filename;
    /* luego la tengo que guardar en la DB */
    let user ={
        username:usuarioAGuardar.usuario,
        mail:usuarioAGuardar.mail,
        contrasenia:bcrypt.hashSync(usuarioAGuardar.password,12),
        foto_perfil : imgPefil,
        fecha: usuarioAGuardar.fecha,
        dni: usuarioAGuardar.dni
    }
    User.create(user)
    .then((result)=>{
        return res.redirect('/users/login')
    })
    .catch((err)=>{
        return console.log(err)
    })
    
}
}







module.exports = userController;