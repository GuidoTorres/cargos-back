const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_COMPONENTE_AJUSTE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_AJUSTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_AJUSTE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    DESC_AJUSTE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    VALOR_INICIAL_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_ACUMUL_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_INICIAL_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    DEPREC_ACUMUL_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_COMPONENTE_AJUSTE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INM_COMPONENTE_AJUSTE",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
          { name: "SEC_AJUSTE" },
        ]
      },
    ]
  });
};
