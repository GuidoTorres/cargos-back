const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CARGA_ARCHIVOS_DET', {
    ID_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    L_ID_CAR_ARC_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    S_REGISTRO: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    S_OBSERVA: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    S_REG_TIP: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    S_ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CARGA_ARCHIVOS_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CARGA_ARCHIVOS_DET",
        unique: true,
        fields: [
          { name: "ID_SEC" },
          { name: "ANO_EJE" },
          { name: "L_ID_CAR_ARC_DET" },
        ]
      },
    ]
  });
};
