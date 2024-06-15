const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('unidad_medida', {
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
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UNIDAD_MEDIDA_SIAF: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ES_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'unidad_medida',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_UNIDAD_MEDIDA",
        unique: true,
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
      {
        name: "pk_unidad_medida",
        unique: true,
        fields: [
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
