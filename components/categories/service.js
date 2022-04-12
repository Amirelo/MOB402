// service: Tầng giao tiếp db

// description: Lấy danh sách sản phẩm


exports.getCategories = async() => {
    return data;
}

exports.getNameById = async(id) => {
    const name = data.filter(item=> item._id == id)[0];
    // Nếu có danh mục thì return name, ko có thì undefined
    if(category){
        return category?.name;

    }
    return null;
}

var data=[
    { "id": 1, "name": 'Fruit'},
    { "id": 2, "name": 'Vegetable'},
    { "id": 3, "name": 'Something'},
]