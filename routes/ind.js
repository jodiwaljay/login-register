var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/jodiwal', function(req, res, next) {
  res.send(req.body);
});

router.get('/:jodiwal', function(req, res, next) {
  res.send(req.params.jodiwal);
});
module.exports = router;
