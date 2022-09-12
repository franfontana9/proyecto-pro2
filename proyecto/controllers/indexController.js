const data= require("../data/index");


const indexController = {
    index: function(req, res) {
        console.log (data);
        res.render('index', { title: 'Express', data:data });
      },

    resultados: function(req, res) {
        res.render('resultadoBusqueda', { title: 'Express' });
      },
}







module.exports = indexController;