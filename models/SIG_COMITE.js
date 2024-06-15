const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_COMITE', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_COMITE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_COMITE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_COMITE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_COMITE",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_COMITE" },
          { name: "SEC_COMITE" },
        ]
      },
    ]
  });
};
