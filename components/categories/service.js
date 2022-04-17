// service: Tầng giao tiếp db

// description: Lấy danh sách sản phẩm
const categoryModel = require('./model');

exports.getCategories = async() => {
    return categoryModel.find({},'id name');
}

