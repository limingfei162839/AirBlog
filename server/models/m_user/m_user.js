var Sequelize = require('../conn');

//============用户增加==============
exports.AddUser = function(data, callback) {
    var model = JSON.parse(data.model);
    var sql = 'INSERT INTO user (datetime,username,password,Email,Mobile,site) VALUES ("' + model.datetime + '","' + model.name + '","' + model.pass + '","' + model.email + '","' + model.Mobile + '","' + model.site + '")';
    Sequelize.query(sql).then(function(ret) {
        console.log(ret, '=====');
        if (ret.length > 0) {
            callback({ 'code': 0, 'msg': '用户添加成功', 'data': ret[0] });
        } else {
            callback({ 'code': 1, 'msg': '用户添加失败', 'data': ret[0] });
        }
    });
};


//============用户删除==============
exports.DeleteUser = function(data, callback) {
    var sql = 'delete FROM user where ID = "' + data.ID + '"';
    Sequelize.query(sql).then(function(ret) {
        if (ret.length > 0) {
            callback({ 'code': 0, 'msg': '用户删除成功', 'data': ret[0] });
        } else {
            callback({ 'code': 1, 'msg': '用户删除失败', 'data': ret[0] });
        }
    });
};

//============用户修改==============
exports.UpdateUser = function(data, callback) {
    var model = JSON.parse(data.model);
    var sql = 'update user set datetime = "' + model.datetime + '", username = "' + model.name + '", password = "' + model.pass + '", Email = "' + model.email + '", Mobile = "' + model.Mobile + '", site = "' + model.site + '" where ID = "' + model.Id + '"';
    Sequelize.query(sql).then(function(ret) {
        if (ret.length > 0) {
            callback({ 'code': 0, 'msg': '用户修改成功', 'data': ret[0] });
        } else {
            callback({ 'code': 1, 'msg': '用户修改失败', 'data': ret[0] });
        }
    });
};

//============用户查询==============
exports.SelectUser = function(data, callback) {
    var sql = 'SELECT * FROM user order by Id';
    Sequelize.query(sql).then(function(ret) {
        if (ret[0].length > 0) {
            callback({ 'code': 0, 'msg': '用户查询成功', 'data': ret[0] });
        } else {
            callback({ 'code': 1, 'msg': '用户查询失败', 'data': ret[0] });
        }
    });
};