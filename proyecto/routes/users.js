var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');





router.get('/', userController.index);
router.get('/resultados', userController.resultados);
module.exports = router;



/*nose si sacar esto*/
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
