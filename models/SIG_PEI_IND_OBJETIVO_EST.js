const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEI_IND_OBJETIVO_EST', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_OE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEI_OBJETIVO_EST',
        key: 'SECUENCIA'
      }
    },
    SEC_DET_OE_IND: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CODIGO_IND: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    DESCRIPCION_IND: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    UNIDAD_MEDIDA_IND: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    META_OE: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    },
    LINEA_BASE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_FLAG: {
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
    tableName: 'SIG_PEI_IND_OBJETIVO_EST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PEI_IND_OBJETIVO_EST",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_OE" },
          { name: "SEC_DET_OE_IND" },
        ]
      },
    ]
  });
};
