const data= require("../data/index");


const posteoController = {
    agregarPosteo: function(req, res) {
        res.render('agregarPost');
      },

    detallePosteo: function(req, res) {
        res.render('detallePost');
      },
}







module.exports = posteoController;