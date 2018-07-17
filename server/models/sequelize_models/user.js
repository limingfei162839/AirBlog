/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    ID: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    sex: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    Mobile: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    site: {
      type: DataTypes.STRING(32),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
