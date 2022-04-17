const categoryService = require('./service');

exports.getCategories = async() => {
    const data = await categoryService.getCategories();
    return data;
}

exports.getCategorySelected = async(id)=>{
    let data = await categoryService.getCategories();
    data=data.map(item=>{
        item ={
            _id: item._id,
            name: item.name,
            description: item.description,
            selected: item._id == id
        }
       
        return item;
    })
    return data;
}