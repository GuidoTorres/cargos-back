const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_techo_fase_3', {
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    mnto_progra: {
      type: DataTypes.DECIMAL(18,3),
      allowNull: true
    },
    secuencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_techo_fase_3',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_FASE_4",
        fields: [
          { name: "origen" },
          { name: "fuente_financ" },
          { name: "secuencia" },
          { name: "FASE_CUADRO" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
        ]
      },
      {
        name: "pk_techo_fase_4",
        unique: true,
        fields: [
          { name: "secuencia" },
        ]
      },
    ]
  });
};
