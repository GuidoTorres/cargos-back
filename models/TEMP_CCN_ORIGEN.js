const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TEMP_CCN_ORIGEN', {
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    NOM_CENTRO_COSTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOM_SUB_FINALIDAD: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    SEC_FUNCP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TOTAL_PROGRA_BIEN: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    TOTAL_PROGRA_SERVICIO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TEMP_CCN_ORIGEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TEMP_CCN_ORIGEN",
        unique: true,
        fields: [
          { name: "CENTRO_COSTO" },
          { name: "SUB_FINALIDAD" },
          { name: "SEC_FUNCP" },
        ]
      },
    ]
  });
};
