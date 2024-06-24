const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPROF', {
    ID_PROF: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    ID_GRAD_INST: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    DE_PROF: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMPROF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Profesiones",
        unique: true,
        fields: [
          { name: "ID_PROF" },
        ]
      },
    ]
  });
};
