
const ProductService = require('./service');
const catergoryService = require('../categories/service');
const async = require('hbs/lib/async');

exports.getProducts = async() => {
    const data = await ProductService.getProducts();
    const categories = await catergoryService.getCategories();
    return data;
}

exports.getProductById = async(id) =>{
    const product = await ProductService.getProductById(id);
    return product;
}

exports.insert = async (product) =>{
    await ProductService.insert(product);
}

exports.delete = async (id) =>{
    await ProductService.delete(id);
}
