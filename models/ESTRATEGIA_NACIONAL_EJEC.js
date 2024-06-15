const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ESTRATEGIA_NACIONAL_EJEC', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ESTRATEGIA_NACIONAL_NOMBRE',
        key: 'ESTRATEGIA_NACIONAL'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ESTRATEGIA_NACIONAL_NOMBRE',
        key: 'ESTRATEGIA_NACIONAL'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ESTRATEGIA_NACIONAL_EJEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ESTRATEGIA_NAC_EJEC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "ESTRATEGIA_NACIONAL" },
        ]
      },
      {
        name: "PK_ESTRATEGIA_NACIONAL_EJEC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FASE_CUADRO" },
          { name: "ESTRATEGIA_NACIONAL" },
        ]
      },
    ]
  });
};
