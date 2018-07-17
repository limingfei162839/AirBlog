var Sequelize = require('../conn');
exports.signUser = function(data, callback) {
    var sql = 'SELECT * FROM `user` where username = "' + data.username + '" and password = "' + data.password + '"';
    Sequelize.query(sql).then(function(ret) {
        if (ret[0].length > 0) {
            callback({ 'code': 0, 'msg': '登录成功', 'data': ret[0] });
        } else {
            callback({ 'code': 1, 'msg': '用户名或密码错误！请核对后重试！', 'data': ret[0] });
        }
    });
};