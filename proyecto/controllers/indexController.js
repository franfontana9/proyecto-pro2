const data= require("../data/index");
const { post } = require("../routes");


const indexController = {
    index: function(req, res) {
        res.render('index', {info: data.usuarios, data:data.posteos});
      },

    resultados: function(req, res) {
      let texto =  req.query.texto;
      let info = data.posteos
      let posteos = {}
      for(let i = 0; i < info.length; i++){
        if (info[i].texto == texto){
          posteos = info[i]
        }
      }
        res.render('resultadoBusqueda', {posteo: posteo});
      },
}







module.exports = indexController;