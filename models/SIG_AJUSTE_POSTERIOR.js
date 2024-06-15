const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_AJUSTE_POSTERIOR', {
    NOMBRE_AJUSTE: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    COD_AJUSTE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    COD_AJUSTE_PADRE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CLAS_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    VALOR_AJUSTE: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_AJUSTE_POSTERIOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_AJUSTE_POSTERIOR",
        unique: true,
        fields: [
          { name: "NOMBRE_AJUSTE" },
          { name: "COD_AJUSTE" },
          { name: "VALOR_AJUSTE" },
        ]
      },
    ]
  });
};
