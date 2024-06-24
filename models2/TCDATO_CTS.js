const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCDATO_CTS', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    NU_ANO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_MES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NU_DIA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FE_REIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DE_NUEV: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TCDATO_CTS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_DatosCTS",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
