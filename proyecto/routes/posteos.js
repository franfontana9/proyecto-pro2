var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteoController');






router.get('/', posteoController.index);
router.get('/resultados', posteoController.resultados);
module.exports = router;


/*nose si sacar esto*/
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;