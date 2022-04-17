var jwt =require('jsonwebtoken')
var bcrypt=require('bcryptjs')
var User = require('./model')

exports.signup = (req,res) =>{
    const user = new User({
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 8)
    });
    
    user.save((err, user) =>{
        if (err) {
            console.log(err)
            return;
          } else {
              console.log("User Registered successfully")
              
          }
    });  
};

exports.signin = (req, res) => {
  User.findOne({
      username: req.body.username
    })
    .exec((err, user) => {
      if (err) {
        console.log(err)
        return;
      }
      if (!user) {
        return console.log("User not found");
      }

      //comparing passwords
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      // checking if password was valid and send response accordingly
      if (!passwordIsValid) {
        return console.log("Invalid Password!")
      }
      //signing token with user id
      var token = jwt.sign({
        id: user.id
      }, " "+process.env.API_SECRET, {
        expiresIn: 86400
      });

      //responding to client request with user profile success message and  access token .
      res.status(200)
        .send({
          user: {
            id: user._id,
            username: user.username,
          },
          message: "Login successfull",
          accessToken: token,
        });
    });
};