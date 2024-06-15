const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_COMPONENTE_CUENTA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_CUENTA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    TIPO_CUENTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_COMPONENTE_CUENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_COMP_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "PK_SIG_INM_COMP_CUENTA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
          { name: "SEC_CUENTA" },
        ]
      },
    ]
  });
};
