const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_TIPO_INSTITUCION', {
    INST_TIPO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    INST_DESCRI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_TIPO_INSTITUCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_TIPO_INSTITUCION",
        unique: true,
        fields: [
          { name: "INST_TIPO" },
        ]
      },
    ]
  });
};
