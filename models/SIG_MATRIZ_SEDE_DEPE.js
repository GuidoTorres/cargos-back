const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MATRIZ_SEDE_DEPE', {
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
    SECUENCIA_MATRIZ: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA_ESCALA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SECUENCIA_SD_ORIGEN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECUENCIA_SD_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MONTO_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_FAMILIAR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MATRIZ_SEDE_DEPE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MATRIZ_SEDE_DEPE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA_MATRIZ" },
        ]
      },
    ]
  });
};
