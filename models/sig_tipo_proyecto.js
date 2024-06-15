const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tipo_proyecto', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    codigo: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tipo_proyecto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_siga_tipo_proyecto_01",
        fields: [
          { name: "ano_eje" },
          { name: "codigo" },
          { name: "clasificador" },
        ]
      },
      {
        name: "ind_stp_01",
        fields: [
          { name: "ano_eje" },
          { name: "codigo" },
          { name: "clasificador" },
        ]
      },
      {
        name: "PK_SIG_TIPO_PROYECTO",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "codigo" },
        ]
      },
    ]
  });
};
