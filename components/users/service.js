// Tầng giao tiếp vs db

const userModel = require('./model')

exports.login = async (username) => {
    const user = await userModel.findOne({username:username},'id username password');
    return user;
}