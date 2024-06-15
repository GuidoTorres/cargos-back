const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PROGRAMA_PPTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    DESCRIPCION_DETALLA: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    TIPO_PROGRAMA_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    AMBITO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    USUARIO_CREACION: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_CREACION: {
      type: DataTypes.DATE,
      allowNull: false
    },
    USUARIO_MODIFICACION: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_MODIFICACION: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PROGRAMA_PPTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PROGRAMA_PPTO_PK",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "PROGRAMA_PPTO" },
        ]
      },
    ]
  });
};
