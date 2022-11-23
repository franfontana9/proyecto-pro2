const db = require("../database/models");
const Op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');
let User = db.Usuario;

const userController = {
  detalleUsuario: function (req, res) {
    db.Usuario.findOne({
      include: {
        all: true,
        nested: true
      },
      where: {
        id: req.params.id
      }
    })
    .then(detalle => {
      res.render('detalleUsuario', { detalle: detalle });
    })

  },

  editarPerfil: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    if (req.session.usuario) {
      return res.render('editarPerfil');
    }else{
      res.redirect('/users/login')
    }
  },

  actualizarPerfil: function(req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    let errors = {};

    if (req.file == undefined) {
      errors.message = "El campo foto esta vacio";
      res.locals.errors = errors;
      return res.render('editarPerfil');
    }
    else if (req.body.fecha == "") {
        errors.message = "El campo fecha esta vacio";
        res.locals.errors = errors;
        return res.render('editarPerfil');
    }
    else if (req.body.dni == "") {
        errors.message = "El campo dni esta vacio";
        res.locals.errors = errors;
        return res.render('editarPerfil');
    }
    else if (req.body.dni.length != 8) {
        errors.message = "El campo dni debe tener 8 digitos";
        res.locals.errors = errors;
        return res.render('editarPerfil');
    }
    else{
      db.Usuario.update({
        foto_perfil: req.file.filename,
        fecha: req.body.fecha,
        dni: req.body.dni
      },
      {
        where: {
          id: req.session.usuario.id
        }
      })
      .then(()=> res.redirect('/users/editarPerfil'))
      .catch(error => console.log(error))
    }
  },
  
  login: function (req, res) {
    res.render('login');
  },

  miPerfil: function (req, res) {
    const id = req.params.id
    db.Usuario.findByPk(id, {
      include: [{
        all:true,
        nested: true
      }]
    })
    .then((usuario)=> {
      res.render('miPerfil', { usuario_encontrado: usuario });
    })
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
        if (usuario == null || !bcrypt.compareSync(req.body.password, usuario.contrasenia)) {
          res.locals.error = 'usuario invalido'
          return res.render('login');
        }
        req.session.usuario = usuario.dataValues;

        if(req.body.rememberme != undefined) {
          res.cookie('userId', usuario.id, {
            maxAge: 1000 * 60 * 60
          })
        }

        res.redirect('/')
      })
  },
  logout: function (req, res) {
      req.session.destroy(),
      res.clearCookie('userId')
      res.redirect('/users/login')
  },
  store: (req, res) => {
    let errors = {};

    if (req.body.usuario == "") {
      errors.message = "El campo usuario esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    if (req.body.password == "") {
      errors.message = "El campo password esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    if (req.body.password.length <= 2) {
      errors.message = "El campo password debe tener mas de 2 caracteres";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    if (req.body.mail == "") {
      errors.message = "El campo mail esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.file == undefined) {
      errors.message = "El campo foto esta vacio";
      res.locals.errors = errors;
      return res.render('registracion');
    }
    else if (req.body.fecha == "") {
        errors.message = "El campo fecha esta vacio";
        res.locals.errors = errors;
        return res.render('registracion');
    }
    else if (req.body.dni == "") {
        errors.message = "El campo dni esta vacio";
        res.locals.errors = errors;
        return res.render('registracion');
    }
    else if (req.body.dni.length != 8) {
        errors.message = "El campo dni debe tener 8 digitos";
        res.locals.errors = errors;
        return res.render('registracion');
    }
    else{

      User.findOne({
        where: {
          [Op.or]: [{mail: req.body.mail }, {username: req.body.usuario}]
        }
      })
      .then(usuario => {
        if(usuario != null) {
          errors.message = "El usuario o email ya existe. Elija otro";
          res.locals.errors = errors;
          return res.render('registracion');
        }
        else{

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
      })
     
    }
  },

  seguir: function(req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    let id_usuario_a_seguir = req.params.id;
    db.Seguidor.create({
      id_seguido: id_usuario_a_seguir,
      id_seguidor: req.session.usuario.id
    })
    .then(() => res.redirect('/users/detalleUsuario/' + id_usuario_a_seguir))
    .catch(error => console.log(error))
  },

  dejarSeguir: function(req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    let id_usuario_a_eliminar = req.params.id;
    db.Seguidor.destroy({
      where: [
        { id_seguido: id_usuario_a_eliminar },
        { id_seguidor: req.session.usuario.id}
      ]
    })
    .then(() => res.redirect('/users/detalleUsuario/' + id_usuario_a_eliminar))
    .catch(error => console.log(error))
  }
}

module.exports = userController;