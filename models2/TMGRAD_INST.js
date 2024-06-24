const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMGRAD_INST', {
    ID_GRAD_INST: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_GRAD_INST: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMGRAD_INST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_GradoInstruccion",
        unique: true,
        fields: [
          { name: "ID_GRAD_INST" },
        ]
      },
    ]
  });
};
