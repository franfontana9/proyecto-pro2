const data= require("../data/index");


const indexController = {
    index: function(req, res) {
        res.render('index', {data: data});
      },

    resultados: function(req, res) {
        res.render('resultadoBusqueda');
      },
}







module.exports = indexController;