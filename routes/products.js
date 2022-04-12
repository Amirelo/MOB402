var express = require('express');
var router = express.Router();

const productController = require('../components/products/controller');
const categoryController = require('../components/categories/controller');
const async = require('hbs/lib/async');
const res = require('express/lib/response');

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

router.get('/:id/edit', async function(req, res,next){
    const {id} = req.params;
    const product = await productController.getProducts(id);

    res.render('product',{product: product});
})

router.delete('/:id', async function (req, res) {
    const data = await productController.getProducts();
    const itemIndex= data(req.params.id);
    if (itemIndex === -1) return res.status(404).json({})

    users.splice(itemIndex, 1)
    res.json(data)
});

module.exports = router;