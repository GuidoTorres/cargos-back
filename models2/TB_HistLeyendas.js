const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_HistLeyendas', {
    HistFecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    PlCaGrupo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Reincorporado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      primaryKey: true
    },
    LeyeDescripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'TB_HistLeyendas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HistLeyendas",
        unique: true,
        fields: [
          { name: "HistFecha" },
          { name: "PlCaGrupo" },
          { name: "Reincorporado" },
        ]
      },
    ]
  });
};
