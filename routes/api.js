const async = require("hbs/lib/async");
var express = require('express'),
    router = express.Router(),
verifyToken = require('../middle/authJWT'),
{
    signin,
    signup
} = require('../components/users/controller')


router.post('/dang-nhap', signin, function(req,res){

})

router.post('/dang-ky', signup, function(req,res){

})

router.post('/san-pham/:id/edit',[upload.single('image')], async function(req,res,next){
    let{body,file, params} = req;
    delete body.image;
    console.log("post action 1")
    console.log(file);
    if(file){
        console.log("post action 2")
        let image= `http://192.168.1.6:3000/images/${file.filename}`
        body={...body,image}
    }
    await productController.update(params.id,body);
    res.redirect('/main/san-pham');
})

router.post('/san-pham',[upload.single('image')], async function(req,res,next){
    let{body,file} = req;
    let image = '';
    if(file){
        image= `http://192.168.1.6:3000/images/${file.filename}`
    }
    body={...body,image}
    await productController.insert(body);
    res.redirect('/main/san-pham');
})

/* 
router.post('/dang-nhap', async function(req,res,next){
    const {username, password} = req.body;
    const user = await userController.login(username, password);
    if(user){
        const token = jwt.sign({id:user._id, username:user.username})
        res.json({status:true, id:user._id, username:user.username, token})
    } else{
        res.json({status: false})
    }
})

router.post('/dang-ky', async function(req,res,next){
    const {username, password, confirm_password} = req.body;
    const user = await userController.register(username, password, confirm_password);

    if(user){
        res.json({status:true})
    } else{
        res.json({status: false})
    }
});

*/
module.exports = router;