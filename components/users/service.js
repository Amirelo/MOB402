// Tầng giao tiếp vs db
exports.login = async (username) => {
    const user = data.filter(item => item.username == username)[0];
    return user;
}

var data = [
    { "id": 1, "username": 'admin@gmail.com', "password": 1, "name": 'Tài' },
    { "id": 2, "username": 'manager@gmail.com', "password": 1, "name": 'Tuấn' },
    { "id": 3, "username": 'employee@gmail.com', "password": 1, "name": 'Tương' },
    { "id": 4, "username": 'seo@gmail.com', "password": 1, "name": 'Tan' },

]