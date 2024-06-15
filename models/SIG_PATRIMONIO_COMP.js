const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO_COMP', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_DEPREC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IND_TIPO_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_TOTAL_PRODUCIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO_COMP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PAT_COMP_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_PAT_COMP",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "SEC_COMPONENTE" },
        ]
      },
    ]
  });
};
