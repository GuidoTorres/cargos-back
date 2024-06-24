const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpDatosCTS2', {
    perscodigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'años': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dias: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpDatosCTS2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__tmpDatos__21E3855A1E465166",
        unique: true,
        fields: [
          { name: "perscodigo" },
        ]
      },
    ]
  });
};
