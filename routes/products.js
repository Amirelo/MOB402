var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');
const async = require('hbs/lib/async');
const res = require('express/lib/response');

const upload = require('../middle/upload');

router.get('/', async function (req,res,next){
    res.render('main');
})

/*
 * http://localhost:3000/san-pham/
 * desc: hiển thị danh sách sản phẩm
 */
router.get('/san-pham', async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const data = await productController.getProducts();
    res.render('products', { products: data });
});

router.get('/danh-muc', async function (req,res,next){
    const data = await categoryController.getCategories();
    res.render('categories',{categories: data});
});

router.get('/khac', async function(req,res,next){
    res.render('others');
});

router.get('/users',async function (req,res,next){
    res.render('users');
});

router.get('/nguoi-dung', async function(req,res,next){
    res.render('current-user');
})

router.get('/san-pham/:id/edit', async function(req, res,next){
    const {id} = req.params;
    const product = await productController.getProductById(id);
    const categories = await categoryController.getCategorySelected(product.category_id._id);
    res.render('product_edit',{product: product, categories: categories});
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

router.get('/san-pham/add', async function(req,res,next){
    const categories = await categoryController.getCategories();
    res.render('product_insert',{categories: categories});
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


router.delete('/san-pham/:id/delete', async function (req, res,next) {
    const {id} = req.params;
    await productController.delete(id);
    res.json({result: true});
});

module.exports = router;