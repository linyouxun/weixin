var express = require('express');
var router = express.Router();

var p = require("../tools/public");
var mg = require("../tools/mongoose");


/* GET home page. */
router.get('/', function(req, res, next) {
  mg.saveUser({"openid":"12312312312"})
  res.render('index', { title: 'Express' });
});


router.get('/wx.do', function(req, res, next) {
  let query = req.query;
  if(p.checkWXInfo(query)){
    return res.send(query.echostr)
  }
  res.render('index', { title: 'Express' });
});

module.exports = router;
