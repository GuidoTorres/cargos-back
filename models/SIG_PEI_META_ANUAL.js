const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEI_META_ANUAL', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_IND_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_IND_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_OE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_IND_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_DET_OE_IND: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_IND_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_META: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    META_ANUAL: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    TIPO_FLAG: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    tableName: 'SIG_PEI_META_ANUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PEI_META_ANUAL",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_OE" },
          { name: "SEC_DET_OE_IND" },
          { name: "SEC_META" },
        ]
      },
    ]
  });
};
