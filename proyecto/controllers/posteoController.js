const data= require("../data/index");


const posteoController = {
    agregarPost: function(req, res) {
        res.render('agregarPost');
      },

    detallePost: function(req, res) {
        res.render('detallePost');
      },
}







module.exports = posteoController;