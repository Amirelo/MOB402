var express = require('express'),
router = express.Router(),
verifyToken = require('../middle/authJWT'),
{
  signin,
  signup
} = require('../components/users/controller')

const userController = require('../components/users/controller');
const async = require('hbs/lib/async');

router.post('/dang-nhap', signin, function(req,res){

})

router.post('/dang-ky', signup, function(req,res){

})



router.get('/dang-nhap', function (req, res, next) {
  res.render('login');
});

router.get('/dang-ky', function (req,res, next){
  res.render('register');
})

/*
* http://localhost:3000/dang-xuat
* method: get
* desc: tiến hành đăng xuất, thành công chuyển qua đăng nhập
*/
router.get('/dang-xuat', function (req, res, next) {


  // nếu thành công thì chuyển đăng nhập
  res.redirect('/login');
});

module.exports = router;