const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INTF_DET', {
    SECUENCIAL: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICAD: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_MN: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    id_clasifi: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    clasifniv1: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasifniv2: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasifniv3: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv4: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv5: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasifniv6: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INTF_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INTF_DET",
        unique: true,
        fields: [
          { name: "SECUENCIAL" },
          { name: "CLASIFICAD" },
          { name: "SEC_FUNC" },
        ]
      },
    ]
  });
};
