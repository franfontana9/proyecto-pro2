const data= require("../data/index");



const indexController = {
    index: function(req, res) {
        res.render('index', {info: data.usuarios, data:data.posteos});
      },

    resultados: function(req, res) {
      let terminoBuscado =  req.query.terminoBuscado;
      let resultadoBusqueda = []
      for(let i = 0; i < data.posteos.length; i++){
        if (data.posteos[i].pieImagen.toLowerCase().includes(terminoBuscado.toLowerCase())){
          resultadoBusqueda.push(data.posteos[i])
          
        }
      }
     
        return res.render('resultadoBusqueda', {resultados:resultadoBusqueda, buscado:terminoBuscado});
      },
}







module.exports = indexController;