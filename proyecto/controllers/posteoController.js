const data= require("../data/index");


const posteoController = {
    index: function(req, res) {
        console.log (data.posteos);
        res.render('index', { title: 'Express', data:data });
      },

    resultados: function(req, res) {
        res.render('resultadoBusqueda', { title: 'Express' });
      },
}







module.exports = posteoController;