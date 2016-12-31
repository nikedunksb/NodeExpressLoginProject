var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
//  res.send('respond with a resource');
});

router.post("/", function(req,res,next) {
  var username = req.body.username;
  var password = req.body.password;
  console.log('Username: ' + req.body.username);
  console.log('Password: ' + req.body.password);



  var regUname  = req.body.Rusername;
  var regEmail = req.body.Remail;
  var regPwd  = req.body.Rpassword;
  var regCpwd = req.body.Rconfirmpassword;

  console.log('Username: ' + req.body.username);
  console.log('Password: ' + req.body.password);

    console.log('Username: ' + req.body.Rusername);
    console.log('Password: ' + req.body.Rpassword);
 res.redirect('/list');
//  res.render('index', { title: 'dashboard' });
});

router.post('/register', function(req,res,next) {
  var regUname  = req.body.Rusername;
  var regEmail = req.body.Remail;
 var regPwd  = req.body.Rpassword;
  var regCpwd = req.body.Rconfirmpassword;

  console.log('Username: ' + req.body.Rusername);
  console.log('Password: ' + req.body.Rpassword);
});

module.exports = router;
