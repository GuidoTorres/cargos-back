const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_UGEL', {
    ID_DRE: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPR_DRE',
        key: 'ID_DRE'
      }
    },
    ID_UGEL: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    DESC_UGEL: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_UGEL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_UGEL",
        unique: true,
        fields: [
          { name: "ID_DRE" },
          { name: "ID_UGEL" },
        ]
      },
    ]
  });
};
