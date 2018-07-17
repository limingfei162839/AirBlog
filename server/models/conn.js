/**
 * Created by lmf 2018/03/06
 */

var Sequelize = require('sequelize');
var config = require('../config');
var sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: 'mysql',
    timezone: "+08:00",
    logging: true,
    define: {
        // 字段以下划线（_）来分割（默认是驼峰命名风格）
        //underscored: true,
        timezone: "+08:00",
        timestamps: false,
    }
});

module.exports = sequelize;