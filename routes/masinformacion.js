var express = require('express');
var router = express.Router();

/* GET mas informacion page. */
router.get('/', function(req, res, next) {
  res.render('masinformacion', { title: 'Express' });
});

module.exports = router;