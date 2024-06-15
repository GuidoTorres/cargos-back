const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_CARGA_CLASIFICADOR', {
    CLASIFICADOR_ANTIGUO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACT: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR_NUEVO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_CARGA_CLASIFICADOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TECHO_01",
        unique: true,
        fields: [
          { name: "CLASIFICADOR_ANTIGUO" },
          { name: "TIPO_ACT" },
          { name: "TIPO_BIEN" },
          { name: "CLASIFICADOR_NUEVO" },
        ]
      },
    ]
  });
};
