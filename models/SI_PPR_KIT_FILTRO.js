const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PPR_KIT_FILTRO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PROC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_CALCULO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PPR_KIT_FILTRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_PPR_KIT_FILTRO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_PROC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
