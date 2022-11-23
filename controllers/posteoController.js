const data = require("../data/index");
const db = require('../database/models');

const posteoController = {
  agregarPosteo: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    if (req.session.usuario) {
      return res.render('agregarPost');

    } else {
      res.redirect('/users/login')
    }
  },

  detallePosteo: function (req, res) {
    db.Posteo.findOne({
      include:{ 
        all: true,
        nested: true
      },
      where: {id: req.params.id}
    })
    .then((posteo) => {
      res.render('detallePost', { posteo: posteo });
    })

  },
  crearPosteo: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    let errors = {};

    if (req.file == undefined) {
        errors.message = "El campo foto esta vacio";
        res.locals.errors = errors;
        return res.render('agregarPost');
    }
    else if (req.body.post == "") {
        errors.message = "El campo post esta vacio";
        res.locals.errors = errors;
        return res.render('agregarPost');
    }
    else{
      db.Posteo.create({
        id_usuarios: req.session.usuario.id,
        imagen : req.file.filename,
        pie_imagen : req.body.post
      })
      .then(()=> res.redirect('/'))
      .catch(error => console.log(error))
    }
  },

  agregarComentario: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    db.Comentario.create({
      id_posteos: req.params.id,
      id_usuarios: req.session.usuario.id,
      comentario :req.body.comentario
    })
    .then(() => res.redirect('/posteos/detallePosteo/' + req.params.id))
    .catch(error => console.log(error))
  },

  eliminarPosteo: function (req, res) {
    
    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }
    
    db.Posteo.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
  },

  editarPosteo: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    db.Posteo.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((posteo) => res.render('editarPost', {posteo: posteo}))
    .catch(error => console.log(error))
  },

  actualizarPosteo: function (req, res) {

    if(req.session.usuario == undefined) {
      return res.redirect('/')
    }

    db.Posteo.findOne({
      where: {id: req.params.id}
    })
    .then((posteo) => {
      
          let errors = {};
      
          if (req.file == undefined) {
              errors.message = "El campo foto esta vacio";
              res.locals.errors = errors;
              return res.render('editarPost', {posteo: posteo});
          }
          else if (req.body.post == "") {
              errors.message = "El campo post esta vacio";
              res.locals.errors = errors;
              return res.render('editarPost', {posteo: posteo});
          }
          else{

            db.Posteo.update({
              imagen : req.file.filename,
              pie_imagen : req.body.post
            }, {
              where: [
                {id: req.params.id},
                {id_usuarios: req.session.usuario.id}
              ]
            })
            .then(()=> res.redirect('/posteos/detallePosteo/' + req.params.id))
            .catch(error => console.log(error))
          }
    })
  }
}







module.exports = posteoController;