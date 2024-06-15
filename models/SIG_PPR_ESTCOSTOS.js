const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_ESTCOSTOS', {
    ID_ESTCOSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_ESTCOSTOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_ESTCOSTOS",
        unique: true,
        fields: [
          { name: "ID_ESTCOSTO" },
          { name: "ANO_EJE" },
          { name: "SECTOR" },
          { name: "SEC_EJEC" },
        ]
      },
    ]
  });
};
