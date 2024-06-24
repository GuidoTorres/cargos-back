const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCCONT_HIST', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    FE_INI: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    FE_FIN: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    ID_FUEN: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ID_META: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    CO_CARG: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    DE_FUNC: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MO_REMU: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TCCONT_HIST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HistorialContratos_1",
        unique: true,
        fields: [
          { name: "ID_PERS" },
          { name: "FE_INI" },
          { name: "FE_FIN" },
        ]
      },
    ]
  });
};
