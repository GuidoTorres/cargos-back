const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_UBICAC_FISICA', {
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    UBICAC_FISICA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ubicac_sbn: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_UBICAC_FISICA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_UBICAC_FISICA",
        unique: true,
        fields: [
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
        ]
      },
    ]
  });
};
