const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_MOVIMIENTO_INM', {
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_MOVIMTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLAG_REGI_INM: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    FLAG_ALTA_INM: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    FLAG_ALTA_UA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    FLAG_ALTA_COMP: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_MOVIMIENTO_INM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_MOVIM_INM",
        unique: true,
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
    ]
  });
};
