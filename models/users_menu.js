const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_menu', {
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    cmenu_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'menus',
        key: 'cmenu_id'
      }
    },
    titulo: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    titulo_sec: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    tipo: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    orden: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_menu',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_Users_Menu",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "cmenu_id" },
          { name: "titulo" },
          { name: "titulo_sec" },
          { name: "sec_ejec" },
        ]
      },
      {
        name: "ind_users_menu_01",
        fields: [
          { name: "cuser_id" },
        ]
      },
      {
        name: "ind_users_menu_02",
        fields: [
          { name: "cmenu_id" },
        ]
      },
      {
        name: "PK_USERS_MENU",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "cmenu_id" },
          { name: "titulo" },
          { name: "titulo_sec" },
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
