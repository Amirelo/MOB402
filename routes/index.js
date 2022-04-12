var express = require('express');
var router = express.Router();

const userController = require('../components/users/controller');

router.get('/dang-nhap', function (req, res, next) {
  res.render('login');
});

// POST tiến hành đăng nhập
router.post('/dang-nhap', async function (req, res, next) {
  const { username, password } = req.body;

  // tiến hành đăng nhập
  const user = await userController.login(username, password);
  console.log(user);
  if (user) {
    res.redirect('/main');
  } else{
    res.redirect('/dang-nhap');
  }


});

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