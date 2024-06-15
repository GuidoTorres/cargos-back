const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_RUBRO', {
    RUBRO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_RUBRO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_COM_RUBRO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_condicion: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROYECTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SERV_BASICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CATALOGO_RUBRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CATALOGO_RUBRO",
        unique: true,
        fields: [
          { name: "RUBRO" },
          { name: "TIPO" },
        ]
      },
    ]
  });
};
