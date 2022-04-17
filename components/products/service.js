// service: Tầng giao tiếp db
const productModel = require('./model');
const async = require("hbs/lib/async");

// description: Lấy danh sách sản phẩm


exports.getProducts = async () => {
  return await productModel.find().populate('category_id');
}

exports.getProductById = async (id) => {
  return productModel.findById(id).populate('category_id');
}


exports.insert = async (product) => {
  const p = new productModel(product);
  await p.save();
}

exports.delete = async (id) => {
  await productModel.findByIdAndDelete(id);
}

exports.update = async (id, product) => {
  await productModel.findByIdAndUpdate(id, product);
}

