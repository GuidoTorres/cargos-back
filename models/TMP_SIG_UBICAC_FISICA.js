const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_UBICAC_FISICA', {
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: false
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
      type: DataTypes.STRING(8),
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
    tableName: 'TMP_SIG_UBICAC_FISICA',
    schema: 'dbo',
    timestamps: false
  });
};
