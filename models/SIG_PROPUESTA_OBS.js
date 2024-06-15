const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_OBS', {
    SEC_OBS: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROPUESTA_OBS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PROPUESTA_OBS",
        unique: true,
        fields: [
          { name: "SEC_OBS" },
        ]
      },
    ]
  });
};
