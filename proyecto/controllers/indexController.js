const data= require("../data/index");



const indexController = {
    index: function(req, res) {
        res.render('index', {info: data.usuarios, data:data.posteos});
      },

    resultados: function(req, res) {
      terminoBuscado =  req.query.terminoBuscado;
      let resultadoBusqueda = []
      for(let i = 0; i < data.posteos.length; i++){
        if (terminoBuscado.toLowerCase() == data.posteos[i].pieImagen.toLowerCase){
          resultadoBusqueda.push(data.posteos[i])
          
        }
      }
        return res.render('resultadoBusqueda', {data:resultadoBusqueda, buscado:terminoBuscado});
      },
}







module.exports = indexController;