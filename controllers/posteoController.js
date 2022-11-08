const data= require("../data/index");


const posteoController = {
    agregarPosteo: function(req, res) {
        if (req.session.usuario) {
          return res.render('agregarPost');

        }else{
          res.redirect('/users/login')
        }
      },

    detallePosteo: function(req, res) {
      let post = data.posteos.find(post=>post.id==req.params.id)
        res.render('detallePost', {post:post});
      },
}







module.exports = posteoController;