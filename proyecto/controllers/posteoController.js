const data= require("../data/index");


const posteoController = {
    agregarPosteo: function(req, res) {
        res.render('agregarPosteo');
      },

    detallePosteo: function(req, res) {
        res.render('detallePosteo');
      },
}







module.exports = posteoController;