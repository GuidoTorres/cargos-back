const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEI_OBJETIVO_EST', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_GENERAL',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_GENERAL',
        key: 'SECUENCIA'
      }
    },
    SEC_OE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_OE: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DESCRIPCION_OE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    ESTADO_OE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PEI_OBJETIVO_EST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PEI_OBJETIVO_EST",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_OE" },
        ]
      },
    ]
  });
};
