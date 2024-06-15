const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_opcion', {
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    cmenu_id: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
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
    opcion: {
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
      type: DataTypes.STRING(10),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    comando: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    condicion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    titulo1: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    titulo_sec1: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    salto_tabla: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    salto_campo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mantenimiento: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    estado: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    flag_web: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_opcion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_Users_Opcion",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "cmenu_id" },
          { name: "titulo" },
          { name: "titulo_sec" },
          { name: "opcion" },
          { name: "sec_ejec" },
        ]
      },
      {
        name: "ind_users_opcion_01",
        fields: [
          { name: "cuser_id" },
          { name: "titulo" },
          { name: "titulo_sec" },
          { name: "sec_ejec" },
          { name: "cmenu_id" },
        ]
      },
      {
        name: "PK_USERS_OPCION",
        unique: true,
        fields: [
          { name: "cuser_id" },
          { name: "cmenu_id" },
          { name: "titulo" },
          { name: "titulo_sec" },
          { name: "opcion" },
          { name: "sec_ejec" },
        ]
      },
    ]
  });
};
