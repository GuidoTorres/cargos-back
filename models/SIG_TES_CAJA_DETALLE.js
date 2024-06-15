const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_DETALLE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA',
        key: 'SEC_EJEC'
      }
    },
    COD_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA',
        key: 'SEC_EJEC'
      }
    },
    COD_EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    TIPO_CARGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_INI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_DETALLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_DETALLE",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CAJA" },
          { name: "COD_EMPLEADO" },
        ]
      },
    ]
  });
};
