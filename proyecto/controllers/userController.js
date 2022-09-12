const data= require("../data/index");
const { posteos } = require("./posteoController");


const userController = {
    index : function(req, res) {
        console.log (data.usuarios);
        res.render('index', { title: 'Express', data:data });
      },

    resultados: function(req, res) {
        res.render('resultadoBusqueda', { title: 'Express' });
      },
}







module.exports = userController;