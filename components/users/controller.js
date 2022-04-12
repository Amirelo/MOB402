// Tầng giao tiếp, xử lý dữ liệu, kết nối router và service

const async = require('hbs/lib/async');
const userService = require('./service');

exports.login = async (username, password) => {
    const user = await userService.login(username);
    if (user && user.password == password) {
        return user;
    }
    return null;
}