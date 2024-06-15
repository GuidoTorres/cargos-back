const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CARGO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CARGO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CEQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CEQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    S_ABREV: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CARGO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CARGO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "CARGO" },
        ]
      },
    ]
  });
};
