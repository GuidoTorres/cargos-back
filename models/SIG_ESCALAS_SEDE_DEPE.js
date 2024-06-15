const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ESCALAS_SEDE_DEPE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA_ESCALA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PORCENT_UIT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PORCENT_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PORCENT_FAMILIAR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ESCALAS_SEDE_DEPE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ESCALAS_SEDE_DEPE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA_ESCALA" },
        ]
      },
    ]
  });
};
