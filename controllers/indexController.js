const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {

    db.Posteo.findAll({
      include: {
        all: true,
        nested: true
      },
      order: [['createdAt', 'DESC']]
    })
    .then((posteos) => {
      res.render('index', { posteos: posteos });
    })
  },

  resultados: function (req, res) {
    let terminoBuscado = req.query.terminoBuscado;
    let ordenar = req.query.ordenar;

    db.Posteo.findAll({
      include: {
        all: true,
        nested: true
      },
      order: [['createdAt', ordenar]],
      where: {pie_imagen: {[op.like] : "%" + terminoBuscado + "%"}}
    })
    .then((resultados) => {
      return res.render('resultadoBusqueda', { resultados: resultados, terminoBuscado: terminoBuscado });
    })
  },
}

module.exports = indexController;