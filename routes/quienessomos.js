var express = require('express');
var router = express.Router();

/* GET quienes somos page. */
router.get('/', function(req, res, next) {
    res.render('quienessomos', { title: 'Express' });
});

module.exports = router;