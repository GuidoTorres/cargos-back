const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_UNIDAD_MEDIDA_EQUI', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_MEDIDA_E: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_UNIDAD_MEDIDA_EQUI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_UNIDAD_MEDIDA_EQUI",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
