const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATEGORIA_TIPO_PATRIMONIO', {
    TIPO_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    CLASE_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TASA_DEPREC_V1: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 0
    },
    TASA_DEPREC_V2: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true,
      defaultValue: 0
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CATEGORIA_TIPO_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CATE_TIPO_PAT",
        unique: true,
        fields: [
          { name: "TIPO_PATRIM" },
          { name: "CLASE_PATRIM" },
          { name: "SEC_CATEGORIA" },
        ]
      },
    ]
  });
};
