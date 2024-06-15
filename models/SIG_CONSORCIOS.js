const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONSORCIOS', {
    COD_CONSORCIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CONSORCIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NOM_CONSORCIO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONSORCIOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONSORC",
        unique: true,
        fields: [
          { name: "COD_CONSORCIO" },
        ]
      },
    ]
  });
};
