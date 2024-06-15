const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_SECUENCIA_MOV_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_SECUENCIA_MOV_ALMACEN',
    schema: 'dbo',
    timestamps: false
  });
};
