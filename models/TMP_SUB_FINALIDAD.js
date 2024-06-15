const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SUB_FINALIDAD', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CADENA_FUNCIONAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SUB_FINALIDAD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tmp_sub_finalidad",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
