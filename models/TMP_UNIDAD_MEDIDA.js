const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_UNIDAD_MEDIDA', {
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ES_PRESUPUESTAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_LOGISTICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_GOBLOCAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_GOBREGIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_GOBNACIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ES_ETE: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_UNIDAD_MEDIDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_UNIDAD_MEDIDA",
        unique: true,
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
