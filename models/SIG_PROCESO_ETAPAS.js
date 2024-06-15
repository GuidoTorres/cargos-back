const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROCESO_ETAPAS', {
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    CALENDARIO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    TIEMPO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FLAG_TIEMPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROCESO_ETAPAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PROCESO_ETAPAS",
        unique: true,
        fields: [
          { name: "TIPO_ORGANISMO" },
          { name: "TIPO_PROCESO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
